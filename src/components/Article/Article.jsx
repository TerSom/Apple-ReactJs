import ArticleiPad from "./ArticleiPad"
import ArticleiPhone from "./ArticleiPhone"
import ArticleWatch from "./ArticleWatch"

const Article = () => {
    return(
        <div className="">
            <ArticleiPhone/>
            <ArticleiPad/>
            <ArticleWatch/>
        </div>
    )
}

export default Article