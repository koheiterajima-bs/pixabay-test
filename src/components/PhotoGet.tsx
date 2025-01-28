import { useState } from 'react';
import axios from 'axios';

// 取得するAPIのインターフェース
interface Post {
    message: string;
    status: string;
}

export default function PhotoGet() {
    // 取得したアイテムを格納するための状態管理
    const [item, setItem] = useState<Post>();

    const fetchItems = async () => {
        try {
            // APIリクエスト
            const response = await axios.get(
                "https://dog.ceo/api/breeds/image/random"
            );
            console.log(response.data.message);
            console.log(response.data.status);
            setItem(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    const buttonClick = () => {
        fetchItems();
    }

    return (
        <>
            <button onClick={buttonClick}>犬の画像を取得</button>
            {item?.status === "success" || "" ? (
                <p>画像取得成功</p>
            ) : (
                <p>画像取得失敗</p>
            )}
            <img src={item?.message} alt="" />
        </>
    )
}