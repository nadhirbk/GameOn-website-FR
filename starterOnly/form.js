const loadForm = () => {

    // form elements
    const firstName = document.getElementById("first");
    const lastName = document.getElementById("last");
    const email = document.getElementById("email");
    const birthdate = document.getElementById("birthdate");
    const tournamentQuantity = document.getElementById("quantity");
    const checkbox = document.getElementById("checkbox1");
    const confirmationMsgBox = document.getElementById("confirmationMsgBox");
    const form = document.querySelector("form");
    const city = document.getElementById("city-selector")

    const allRules = [
        {
            element: firstName,
            rules: [
                {
                    regex: /^(.{2,})$/,
                    error: "Veuillez entrer au moins 2 caractères."
                },
                {
                    regex: /^[a-zA-Z]+$/,
                    error: "Caractères invalides A."
                }
            ]
        },
        {
            element: lastName,
            rules: [
                {
                    regex: /^(.{2,})$/,
                    error: "Veuillez entrer au moins 2 caractères."
                },
                {
                    regex: /^[a-zA-Z]+$/,
                    error: "Caractères invalides B."
                }
            ]
        },
        {
            element: email,
            rules: [
                {
                    regex: (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$/),
                    error: "Veuillez entrer une adresse email valide."
                }
            ]
        },
        {
            element: tournamentQuantity,
            rules: [
                {
                    regex: (/^[0-9]?[0-9]+$/),
                    error: "Veuillez entrer un nombre entre 0 et 99."
                }
            ]
        }
    ]


    // La fonction qui va permettre de valider tous les éléments
    function validate() {

        let result = true;

        allRules.forEach((rule) => {
            const element = rule.element;
            element.parentNode.setAttribute("data-error-visible",false);
            const rules = rule.rules;
            rules.find((rule) => {
                const valid = rule.regex.test(element.value)
                if(!valid) {
                    console.log("%cerror", "color: orange", rule.error)
                    element.parentNode.setAttribute("data-error-visible",true);
                    element.parentNode.setAttribute("data-error",rule.error);
                    result = false;
                    return true;
                }
            })
        })

        // Valider date de naissance
        if (!birthdate.value) {  // Date non sélectionnée
            birthdate.parentNode.setAttribute("data-error-visible", true);
            birthdate.parentNode.setAttribute("data-error", "entrez une date");
            result = false;
        } else {
            const today = new Date(), today18 = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
            const date = new Date(birthdate.value), realDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            if ( realDate.getTime() > today18.getTime() /* - 18Ans */ ) {
                birthdate.parentNode.setAttribute("data-error-visible", true);
                birthdate.parentNode.setAttribute("data-error", "t'as pas 18 ans ... dégage !");
                result = false;
            } else {
                birthdate.parentNode.setAttribute("data-error-visible", false);
            }
        }

        // Valider button radio: cities selection
        const selected = form.querySelector('[name="location"]:checked')
        if (!selected) {
            city.setAttribute("data-error-visible", true);
            city.setAttribute("data-error", "selectionnez une ville");
            result = false;
        } else {
            city.setAttribute("data-error-visible", false);
        }

        // Valider les cases à cocher
        // "Je souhaite être prévenu des prochains évènements" n'est pas obligatoire
        if (!(checkbox.checked)) {
            checkbox.parentNode.setAttribute("data-error-visible", true);
            checkbox.parentNode.setAttribute("data-error", "Check, t'as pas le choix !");
            result = false
        } else {
            checkbox.parentNode.setAttribute("data-error-visible", false);
        }

        return result; // Si tout est bon, il valide
    }

    // submit form
    form.onsubmit = (event) => {
        if (!validate()) { //si les données entrées dans le formulaire sont incorrectes
        // "Vous n'avez pas saisi toutes les données correctement."
        event.preventDefault(); // Il n'y a pas de rechargement de page lors du submit, pour garder les données
        } else {
            // L'envoi est validé
            form.style.display = "none";
            confirmationMsgBox.style.display = "flex"
        }
    }

}

export default loadForm