


document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("form");
    let submitBtn = document.querySelector("input[type='submit']");
    let loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'));
    let successModal = new bootstrap.Modal(document.getElementById('successModal'));

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío inmediato

        if (!form.checkValidity()) {
            form.classList.add("was-validated");
            return;
        }

        // Ocultar botón y mostrar modal de carga
        submitBtn.style.display = "none";
        loadingModal.show();

        // Esperar 3 segundos y cambiar al modal de éxito
        setTimeout(() => {
            loadingModal.hide(); // Ocultar el modal de carga
            successModal.show(); // Mostrar el modal de éxito

            // Después de 2 segundos, enviar el formulario
            setTimeout(() => {
                form.submit();
            }, 3000);

        }, 8000);
    });
});
