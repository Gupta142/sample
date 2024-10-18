const Child = (props) => {
    const {childBtn} = props;
    
    const onClickChildBtn = () => {
        childBtn();
    }

    return (
        <div>
            <h1>This is child component</h1>
            <button type="button" onClick={onClickChildBtn} >child btn</button>
        </div>
    )

}

export default Child;