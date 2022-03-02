import styles from '../../styles/Customers.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return { 
        props: { customers: data }
    }
}
const Customers = ({ customers }) => {
    return (
        <div>
            <h1>List Customers</h1>
            {customers.map(customer =>(
                <div key={customer.id}>
                    <a className={styles.single}>
                        <h3>{ customer.name }</h3>
                    </a>

                </div>
            ))}
        </div>
    );
}
 
export default Customers;