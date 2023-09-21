function ListView({list}){
    return(
    <ul>
        {list.map(listItem=>
        <li key={listItem}>{listItem}</li>)}
    </ul>
    );
}
export default ListView;