export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(customer => {
        return {
            params: { id: customer.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
    
}
export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
    
    return { 
        props: { customer: data }
    }
}

const Details = ({ customer }) => {
    return (
        <div>
            <h1>{ customer.name}</h1>
            <p>{ customer.email }</p>
            <p>{ customer.website }</p>
            <p>{ customer.address.city }</p>
        </div>
    );
}

export default Details;