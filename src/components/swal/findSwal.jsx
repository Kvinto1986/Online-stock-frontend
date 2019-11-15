import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import '../../../node_modules/animate.css/animate.css'

export default () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 2000
    })

    Toast.fire({
        background:'#1A4492',
        type: 'success',
        html: '<span style="color:white;margin-left:2%">Data saved successfully<span>'
    })
}
