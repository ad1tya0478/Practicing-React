function List(props){

    const itemList = props.items;
    const category = props.category;

    // const fruits = [
    //     {id: 1,name: "Banana", calories: 70}, 
    //     {id: 2,name: "Apple", calories: 95},
    //     {id: 3,name: "coconut", calories: 90}, 
    //     {id: 4,name: "pineapple", calories: 120},
    //     {id: 5,name: "Orange", calories: 105}
    // ];

    // fruits.sort((a, b) => a.name.localeCompare(b.name))
    // fruits.sort((a,b) => a.calories - b.calories)

    // // const lowcalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highcalFruits = fruits.filter(fruit => fruit.calories > 100);



    // const listitems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.calories}</li> );
    const listitems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; {item.calories}</li> );

    return(<>
    <h3>{category}</h3>
    <ol>{listitems}</ol>
    </>);

}

export default List