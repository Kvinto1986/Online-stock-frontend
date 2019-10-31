import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default (title, text, timer, isConfirm, reset) => {
    Swal
    .fire({
        title: title,
        text: text,
        type: 'success',
        showConfirmButton: isConfirm,
        timer: timer
    })
    .then(reset)
}

