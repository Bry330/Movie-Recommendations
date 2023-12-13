function openSidebar() {
    document.getElementById('sidebar').style.display = "flex";
    
}

function closeSidebar() {
    document.getElementById('sidebar').style.display = "none";
}

function recommendM(category) {
    let ageElement = document.getElementById('Msuggest').value;
   let answerElement = document.getElementById('respond');

    switch(category) {

        case "action":
            if(ageElement <= 13) {
                answerElement.textContent = "Top Gun:Maverick";
            } else {
                if( ageElement <= 17) {
                    answerElement.textContent = "Blonde"
                } else {
                    if(ageElement >= 18) {
                        answerElement.textContent = "A Clockwork Orange"
                    }
                }
            }
        break;

        case "adventure":
            if(ageElement <= 13) {
                answerElement.textContent = 'Raya'
            } else {

                if( ageElement <= 17) {
                    answerElement.textContent = "Chaos Walking"
                } else {
                    if(ageElement >= 18) {
                        answerElement.textContent = "Interstellar"
                    }
                }
            }
        break;

        case "horror":
            if(ageElement <= 13) {
                answerElement.textContent = 'you are to young for watching this, but you can start with Five Nights at freddy'
            } else {

                if( ageElement <= 17) {
                    answerElement.textContent = "Insidious"
                } else {
                    if(ageElement >= 18) {
                        answerElement.textContent = "Sinister"
                    }
                }
            }
        break;

        case "comedy":
            if(ageElement <= 13) {
                answerElement.textContent = 'Marvel Avenger:Civil War'
            } else {

                if( ageElement <= 17) {
                    answerElement.textContent = "Killer Bean Alone"
                } else {
                    if(ageElement >= 18) {
                        answerElement.textContent = "Bean:Movie"
                    }
                }
            }
        break;

    };
}

function recommendS(category) {
    let ageElement = document.getElementById('Msuggest').value;
    let answerElement = document.getElementById('respond');

    switch(category) {

        case "Shoujo":
            if(ageElement <= 13) {
                answerElement.textContent = "Cardcaptor Sakura";
            } else {
                if( ageElement <= 17) {
                    answerElement.textContent = "Sailor Moon"
                } else {
                    if(ageElement >= 18) {
                        answerElement.textContent = "My Dress-Up Darling"
                    }
                }
            }
        break;

        case "Shonen":
            if(ageElement <= 13) {
                answerElement.textContent = 'One Piece'
            } else {
                if( ageElement <= 17) {
                    answerElement.textContent = "Bleach"
                } else {
                    if(ageElement >= 18) {
                        answerElement.textContent = "Soul Eater"
                    }
                }
            }
        break;

        case "Seinen":
            if(ageElement <= 13) {
                answerElement.textContent = 'Bungou Stray Dogs'
            } else {
                if( ageElement <= 17) {
                    answerElement.textContent = "Death Parade"
                } else {
                    if(ageElement >= 18) {
                        answerElement.textContent = "Berserk"
                    }
                }
            }
        break;

        case "Mecha":
            if(ageElement <= 13) {
                answerElement.textContent = 'Bubuki Buranki'
            } else {

                if( ageElement <= 17) {
                    answerElement.textContent = "Gurren Lagann"
                } else {
                    if(ageElement >= 18) {
                        answerElement.textContent = "Mobile Suit Gundam: The Witch From Mercury"
                    }
                }
            }
        break;
    };
    }
