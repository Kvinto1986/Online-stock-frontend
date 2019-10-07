import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

export default () => {
            Swal.fire({
                type: 'success',
                title: 'Congratulations!',
                text: 'Data successfully changed !',
                allowOutsideClick: false,
                timer: 3000
            })
        }
