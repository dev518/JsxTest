class demo {
    click(){

    }
    render() {
        let arr = [1,2,3];
        return (<c x={0} y={100}>
            <c1 x={100} y={200} onclic={this.click}/>
            <c2 x={100} y={200}>
            {
                arr.map( (item) =>{
                  return  <c3 x={100} y={200} />
                })
            }
            </c2>
        </c>)
    }
}