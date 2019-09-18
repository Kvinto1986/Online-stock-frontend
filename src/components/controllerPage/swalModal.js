import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

export default (id, callback, open, setOpen) => {
    const status = open

    setOpen(false)
    Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to finish report?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Accept',
        allowOutsideClick: false
    }).then((result) => {
        if (result.value) {
            callback(id)
            Swal.fire({
                type: 'success',
                title: 'Congratulations!',
                text: 'Data successfully changed !',
                allowOutsideClick: false,
                timer: 3000
            }).then(() => window.location.reload())
        } else if(status)setOpen(true)
    })

}