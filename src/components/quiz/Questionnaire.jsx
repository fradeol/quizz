export default function Questionnaire({data:{question}}) {

    return(
        <div>
            <div className="questionClass">
                <h1>{question}</h1>
            </div>
            <div className="button-overall">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
            </div>
        </div>
    )
}