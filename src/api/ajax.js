import axios from 'axios'


export default function ajax(url,data={},method='GET'){
    return new Promise((resolve,reject)=>{
        //一起取个名字解决每个都有。then
        let name
        // 发get请求
        if (method === 'GET') {
            name = axios.get(url,{
                params:data// 指定quey参数
            })
        }else{
            name = axios.post(url,data)
        }

        //检测请求的成功回调函数
        name.then(
            value => {
                resolve(value.data)
            },
            err => {
                alert('请求出错'+ err.message)
            }

        )
    })
}