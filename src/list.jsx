function List()
{
    return(
        <ol>
            <li>Fruits</li>
              <ul style={{ listStyleType: "none"}}>
                <li>$ Mango</li>
                <li>$ Apple</li>
                <li>$ Orange</li>
              </ul>
              <li>Vegetables</li>
              <ul style={{ listStyleType: "none"}}>
                <li># Mango</li>
                <li># Apple</li>
                <li># Orange</li>
              </ul>
              <li>Birds</li>
              <ul style={{ listStyleType: "none"}}>
                <li>i Peacock</li>
                <li>ii Parrot</li>
                <li>iii Cuckoo</li>
              </ul>
        </ol>
    )
}
export default List;