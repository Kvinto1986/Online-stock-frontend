import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default (reset,text) => {
    Swal.fire({
        title: 'Congratulations!',
        text: text,
        type: 'success',
        showConfirmButton: false,
        timer: 2000
    }).then(reset)
}