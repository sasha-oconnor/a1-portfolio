/* main.js: the project filter, print button, copy email button, and contact form.
   Each one only runs on the page that has it. 
*/

// Readable names for each layer, used in the status message
const LAYER_NAMES = {
  all: 'all',
  hardware: 'hardware',
  systems: 'systems',
  software: 'software',
  ai: 'AI'
};

/* ---------- Projects page: filter projects by layer ---------- */

function setUpLayerFilter() {
  const palette = document.querySelector('.layer-palette');
  if (!palette) {
    return;
  }

  const buttons = Array.from(palette.querySelectorAll('.layer-btn'));
  const projects = Array.from(document.querySelectorAll('.project[data-layers]'));
  const groups = Array.from(document.querySelectorAll('.cell-group'));
  const status = palette.querySelector('.palette-status');

  // Each project lists its layers in data-layers, e.g. "software ai"
  const layersOf = (project) => project.dataset.layers.split(' ');

  // Fill in the count next to each layer button
  buttons.forEach((button) => {
    const layer = button.dataset.layer;
    const count = layer === 'all'
      ? projects.length
      : projects.filter((project) => layersOf(project).includes(layer)).length;
    button.querySelector('.count').textContent = count;
  });

  // Show only the projects on one layer ("all" shows everything)
  function showLayer(layer) {
    const shown = projects.filter((project) => {
      const matches = layer === 'all' || layersOf(project).includes(layer);
      project.hidden = !matches;
      return matches;
    });

    // Hide a whole group (heading included) when none of its projects match
    groups.forEach((group) => {
      group.hidden = group.querySelectorAll('.project:not([hidden])').length === 0;
    });

    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.layer === layer));
    });

    const noun = shown.length === 1 ? 'project' : 'projects';
    status.textContent = layer === 'all'
      ? `Showing all ${shown.length} ${noun}.`
      : `Showing ${shown.length} ${LAYER_NAMES[layer]} ${noun}.`;
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const layer = button.dataset.layer;
      showLayer(layer);
      // Keep the choice in the address bar so the filtered view can be shared
      try {
        history.replaceState(null, '', layer === 'all' ? location.pathname : `#layer-${layer}`);
      } catch (error) {
        // Some browsers block this on file:// pages; the filter still works
      }
    });
  });

  // A jump-list link to a project that the current filter hides first shows every layer again
  document.querySelectorAll('.jump-list a').forEach((link) => {
    link.addEventListener('click', () => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target && target.closest('[hidden]')) {
        showLayer('all');
      }
    });
  });

  palette.hidden = false;

  // Links like projects.html#layer-hardware (from the home page stack) open the page filtered
  function showLayerFromHash() {
    const match = location.hash.match(/^#layer-(\w+)$/);
    if (match && LAYER_NAMES[match[1]]) {
      showLayer(match[1]);
      return true;
    }
    return false;
  }

  if (!showLayerFromHash()) {
    showLayer('all');
  }
  // Also react when the hash changes while the page is already open
  window.addEventListener('hashchange', showLayerFromHash);
}

/* ---------- Experience page: print button ---------- */

function setUpPrintButtons() {
  document.querySelectorAll('[data-print]').forEach((button) => {
    button.hidden = false;
    button.addEventListener('click', () => window.print());
  });
}

/* ---------- Contact page: copy the email address ---------- */

function setUpCopyButtons() {
  document.querySelectorAll('[data-copy]').forEach((button) => {
    const status = button.parentElement.querySelector('.copy-status');
    const text = button.dataset.copy;
    button.hidden = false;

    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(text);
        status.textContent = 'Email address copied.';
      } catch (error) {
        // Clipboard access can be blocked, so tell the visitor what to copy instead
        status.textContent = `Copying is blocked in this browser. The address is ${text}.`;
      }
    });
  });
}

/* ---------- Contact page: turn the form into a pre-filled email ---------- */

function setUpContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) {
    return;
  }
  const status = document.querySelector('#form-status');
  // The address comes from the form's mailto: action, so it is only written once
  const address = form.getAttribute('action').replace('mailto:', '');

  // The submit event only fires after the browser's own checks pass
  // (required fields filled in and a valid email address)
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const company = form.elements.company.value.trim();
    const message = form.elements.message.value.trim();

    const from = company ? `${name}, ${company}` : name;
    const subject = `Message from your portfolio: ${from}`;
    const body = `${message}\n\n${from}\n${email}`;

    window.location.href = `mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = `Your email app should open with the message filled in. If it does not, email me directly at ${address}.`;
  });
}

setUpLayerFilter();
setUpPrintButtons();
setUpCopyButtons();
setUpContactForm();
