document.addEventListener('DOMContentLoaded', function () {
    const commentBar = document.querySelector('.comment-bar');
    const footer = document.getElementById('aboutus');
    const allCommentsContainer = document.querySelector('.allcom form');
    const topCommentsContainer = document.querySelector('.topcom form');
    const totalCommentsAllElement = document.getElementById('totalCommentsAll');
    const totalCommentsTopElement = document.getElementById('totalCommentsTop');


    function updateCommentCount() {
        const allComments = allCommentsContainer.querySelectorAll('.allcom form .commentaire, .allcom form .commentairefin, .allcom form .commentairedebut');
        const topComments = topCommentsContainer.querySelectorAll('.topcom form .commentaire, .topcom form .commentairefin, .topcom form .commentairedebut');
        totalCommentsAllElement.textContent = allComments.length;
        totalCommentsTopElement.textContent = topComments.length;
    }

    function adjustCommentBar() {
        const footerRect = footer.getBoundingClientRect();
        const commentBarHeight = commentBar.offsetHeight;

        // Calcule la distance de l'écran
        const distanceToFooter = footerRect.top - window.innerHeight;

        // Ajuste la barre de commentaires
        if (distanceToFooter < commentBarHeight) {
            commentBar.style.bottom = `${commentBarHeight - distanceToFooter}px`;
        } else {
            commentBar.style.bottom = '0';
        }
    }

    window.addEventListener('scroll', adjustCommentBar);
    window.addEventListener('resize', adjustCommentBar);

    // Affiche la section "All Comments" par défaut
    document.querySelector('.allcom').style.display = 'block';
    document.querySelector('.topcom').style.display = 'none';

    // Ajoute la classe active au bouton "All Comments"
    document.getElementById('showAllComments').classList.add('active');

    // Gère l'envoi du commentaire
    document.getElementById('submitComment').addEventListener('click', function () {
        const commentInput = document.getElementById('commentInput');
        const commentText = commentInput.value.trim();

        if (commentText) {
            // Crée un nouvel élément de commentaire
            const newComment = document.createElement('div');
            newComment.className = 'commentairebreffin';
            newComment.innerHTML = `
                <div class="date">
                    <p class="p1"></p>
                </div>
                <p class="commentaire">${commentText}</p>
                <div class="like">
                    <img src="reference/icons/top_icon.png" class="top_icon">
                    <img src="reference/icons/like_icon.png" class="like_icon">
                    <img src="reference/icons/dislike_icon.png" class="dislike_icon">
                </div>
            `;

            // Ajoute le nouveau commentaire à la section "All Comments"
            const allCommentsForm = document.querySelector('.allcom form');
            allCommentsForm.appendChild(newComment);

            let date1 = new Date();

            let dateperso = date1.toLocaleString('fr-FR', {
                weekday: 'short',
                day: 'numeric',
                month: 'short',
                year: '2-digit',
                hour: 'numeric',
                minute: 'numeric',
            });

            document.querySelectorAll('.p1').forEach(p => {
                p.textContent = dateperso;
            });

            // Attache les événements aux nouvelles icônes
            const likeIcons = newComment.querySelectorAll('.like_icon');
            const dislikeIcons = newComment.querySelectorAll('.dislike_icon');
            const topIcons = newComment.querySelectorAll('.top_icon, .dechk_top_icon');

            likeIcons.forEach(icon => {
                icon.addEventListener('click', function () {
                    if (icon.src.includes('like_icon.png')) {
                        icon.src = 'reference/icons/like_icon_chk.png';
                    } else {
                        icon.src = 'reference/icons/like_icon.png';
                    }
                });
            });

            dislikeIcons.forEach(icon => {
                icon.addEventListener('click', function () {
                    if (icon.src.includes('dislike_icon.png')) {
                        icon.src = 'reference/icons/dislike_icon_chk.png';
                    } else {
                        icon.src = 'reference/icons/dislike_icon.png';
                    }
                });
            });

            topIcons.forEach(icon => {
                icon.addEventListener('click', function () {
                    if (icon.classList.contains('top_icon')) {
                        if (icon.src.includes('top_icon.png')) {
                            icon.src = 'reference/icons/top_icon_chk.png';
                        } else {
                            icon.src = 'reference/icons/top_icon.png';
                        }
                    } else if (icon.classList.contains('dechk_top_icon')) {
                        if (icon.src.includes('top_icon_chk.png')) {
                            icon.src = 'reference/icons/top_icon.png';
                        } else {
                            icon.src = 'reference/icons/top_icon_chk.png';
                        }
                    }

                    const commentElement = icon.closest('#commentairebref, #commentairebrefdebut, #commentairebreffin');

                    if (commentElement) {
                        const isInTopCom = commentElement.closest('.topcom');
                        const isInAllCom = commentElement.closest('.allcom');

                        if (isInTopCom) {
                            const allComSection = document.querySelector('.allcom form');
                            allComSection.appendChild(commentElement);
                        } else if (isInAllCom) {
                            const topComSection = document.querySelector('.topcom form');
                            topComSection.appendChild(commentElement.cloneNode(true));
                        }
                        updateCommentCount();
                    }
                });
            });

            // Vide le champ de texte
            commentInput.value = '';

            updateCommentCount();
        }
    });

    updateCommentCount();
});



document.getElementById('showAllComments').addEventListener('click', function () {
    // Affiche la section "All Comments"
    document.querySelector('.allcom').style.display = 'block';
    document.querySelector('.topcom').style.display = 'none';

    // Change la couleur des boutons
    this.classList.add('active');
    document.getElementById('showTopComments').classList.remove('active');

    updateCommentCount();
});

document.getElementById('showTopComments').addEventListener('click', function () {
    // Affiche la section "Top Comments"
    document.querySelector('.topcom').style.display = 'block';
    document.querySelector('.allcom').style.display = 'none';

    // Change la couleur des boutons
    this.classList.add('active');
    document.getElementById('showAllComments').classList.remove('active');

    updateCommentCount();
});

document.addEventListener('DOMContentLoaded', function () {
    // Sélectionne tous les éléments avec la classe 'like_icon'
    const likeIcons = document.querySelectorAll('.like_icon');

    likeIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            // Change l'icône à une autre icône lors du clic
            if (icon.src.includes('like_icon.png')) {
                icon.src = 'reference/icons/like_icon_chk.png'; // Remplacez par le chemin de votre nouvelle icône
            } else {
                icon.src = 'reference/icons/like_icon.png';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Sélectionne tous les éléments avec la classe 'like_icon'
    const dislikeIcons = document.querySelectorAll('.dislike_icon');

    dislikeIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            // Change l'icône à une autre icône lors du clic
            if (icon.src.includes('dislike_icon.png')) {
                icon.src = 'reference/icons/dislike_icon_chk.png'; // Remplacez par le chemin de votre nouvelle icône
            } else {
                icon.src = 'reference/icons/dislike_icon.png';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const topIcons = document.querySelectorAll('.top_icon, .dechk_top_icon');

    topIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            // Change l'icône à une autre icône lors du clic
            if (icon.classList.contains('top_icon')) {
                if (icon.src.includes('top_icon.png')) {
                    icon.src = 'reference/icons/top_icon_chk.png';
                } else {
                    icon.src = 'reference/icons/top_icon.png';
                }
            } else if (icon.classList.contains('dechk_top_icon')) {
                if (icon.src.includes('top_icon_chk.png')) {
                    icon.src = 'reference/icons/top_icon.png';
                } else {
                    icon.src = 'rreference/icons/top_icon_chk.png';
                }
            }

            // Trouve le commentaire associé à l'icône cliquée
            const commentElement = icon.closest('#commentairebref, #commentairebrefdebut, #commentairebreffin');

            if (commentElement) {
                // Vérifie si le commentaire est dans la section "allcom" ou "topcom"
                const isInTopCom = commentElement.closest('.topcom');
                const isInAllCom = commentElement.closest('.allcom');

                if (isInTopCom) {
                    // Si le commentaire est dans "topcom", déplace-le vers "allcom"
                    const allComSection = document.querySelector('.allcom form');
                    allComSection.appendChild(commentElement);
                } else if (isInAllCom) {
                    // Sinon, déplace-le vers "topcom"
                    const topComSection = document.querySelector('.topcom form');
                    topComSection.appendChild(commentElement);
                }

                updateCommentCount();
            }

        });

    });

});

// pour les dates 
let date1 = new Date();
let dateperso = date1.toLocaleString('fr-FR', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
});

document.querySelectorAll('.p1').forEach(p => {
    p.textContent = dateperso;
});

let date2 = new Date('January 17, 2025 03:24');
let dateperso2 = date2.toLocaleString('fr-FR', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
});

document.querySelectorAll('.p2').forEach(p => {
    p.textContent = dateperso2;
});

let date3 = new Date('January 18, 2025 15:02');
let dateperso3 = date3.toLocaleString('fr-FR', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
});

document.querySelectorAll('.p3').forEach(p => {
    p.textContent = dateperso3;
});

let date4 = new Date('February 14, 2025 20:20');
let dateperso4 = date4.toLocaleString('fr-FR', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
});

document.querySelectorAll('.p4').forEach(p => {
    p.textContent = dateperso4;
});

let date5 = new Date('February 20, 2025 00:05');
let dateperso5 = date5.toLocaleString('fr-FR', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
});

document.querySelectorAll('.p5').forEach(p => {
    p.textContent = dateperso5;
});