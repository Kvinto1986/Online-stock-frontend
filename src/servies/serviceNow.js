import axios from 'axios'
// TODO: .env ! IMPORTANT FOR SECURITY !

export const createServiceNowTicket = data => {
    const options= {
        url: 'https://dev68689.service-now.com/api/now/v2/table/u_angular',
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        data,
        auth:{
            username: 'admin',
            password: 'dsz89BKMzzKJ'
        }
    }

    axios(options).then(res => {
        console.log(res.data.result)
    })
}

export const getBy = serviceName => {
    const options= {
        url: `https://dev68689.service-now.com/api/427591/get_one/getBuID/${serviceName}`,
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        auth: {
            username: 'admin',
            password: 'dsz89BKMzzKJ'
        }
    }

    axios(options).then(res => {
        console.log(res.data.result)
    })
}