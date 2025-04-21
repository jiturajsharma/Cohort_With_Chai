document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userProfileForm');
    const inputs = {
      name: document.getElementById('input-name'),
      job: document.getElementById('input-job'),
      age: document.getElementById('input-age'),
      bio: document.getElementById('input-bio'),
    };
    const previews = {
      name: document.getElementById('preview-name'),
      job: document.getElementById('preview-job'),
      age: document.getElementById('preview-age'),
      bio: document.getElementById('preview-bio'),
    };
  
    // Update preview on input
    form.addEventListener('input', (e) => {
      const field = e.target.id.split('-')[1]; // Extract field name from id
      previews[field].textContent = inputs[field].value;
    });
  });