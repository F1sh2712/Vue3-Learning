import { reactive, ref } from 'vue';
import  axios from 'axios'

export default function() {
    // 数据
    let dogList = reactive([
        'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_3016.jpg'
    ])

    // 方法
    // 通过api获取随机的狗狗图片
    async function getDog(){
        try {
        let result = await axios.get("https://dog.ceo/api/breeds/image/random")
        dogList.push(result.data.message)
        } catch (error) {
            alert(error)
        }
    }
    // 返回值
    return {dogList, getDog}
}
