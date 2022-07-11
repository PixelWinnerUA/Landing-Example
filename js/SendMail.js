"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form_for_send');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {

            form.classList.add('_sending');

            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                formData.innerHTML = '';
                form.reset();
                form.classList.remove('_sending');
            }
            else {
                alert('Ошибка. Это пример сайта, для сохранения конфиденциальных данныхб отправка сообщений отключена!');
                form.classList.remove('_sending');
            }
        } else {
            alert('Заполните необходимые поля');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {

            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input) === false) {
                    formAddError(input);
                    error++;
                }
            }
            if (input.value === '') {
                formAddError(input);
                error++;
                console.log(error);
            }

        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value);
    }

});