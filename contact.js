
    document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    const toast = document.getElementById('toast');

    // Récupération des valeurs
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validation basique
    if (!email.includes('@') || !message.trim()) {
    showToast('Veuillez remplir tous les champs correctement', 'error');
    return;
}

    // Désactiver le bouton pendant l'envoi
    submitBtn.disabled = true;
    submitBtn.textContent = 'Envoi en cours...';

    try {
    // Simuler l'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Réinitialiser le formulaire
    e.target.reset();
    showToast('Message envoyé avec succès!', 'success');
} catch (error) {
    showToast('Une erreur est survenue lors de l\'envoi', 'error');
} finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Envoyer';
}
});
    function showToast(message, type) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.style.display = 'block';

    setTimeout(() => {
    toast.style.display = 'none';
}, 3000);
}
