import { useRouter } from 'next/router';

const Post = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>The post with the id of {id}</h1>
        </div>
    );
};

export default Post;
