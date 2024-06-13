function showModal(title, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalBody').innerText = description;
    $('#projectModal').modal('show');
}
