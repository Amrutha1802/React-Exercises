function ListView({start=1,end=10}){
    const list=[];
    for(let i=start;i<end;i++){
        list.push(i);
    }
    return(
    <ul>
        {list.map(listItem=>
        <li key={listItem}>{listItem}</li>)}
    </ul>
    );
}
export default ListView;
//Explain the function and key property importance in list

