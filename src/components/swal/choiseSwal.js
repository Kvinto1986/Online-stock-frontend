import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import 'animate.css'

export default (isConfirm, data, id) => {
    Swal.fire({
        title: 'Are you sure you want to complete this action?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
    }).then((result) => {
        if (result.value) {
            isConfirm(data, id)
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-start',
                showConfirmButton: false,
                timer: 2000
            })

            Toast.fire({
                background: '#1A4492',
                type: 'success',
                html: '<span style="color:white;margin-left:2%">Data saved successfully<span>'
            })
        }
    })
}