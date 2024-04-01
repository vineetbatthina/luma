import { LoadingTile, PersonTile } from ".";
import { PeopleIds, Person } from "../types";
import { useGetDataFromEndpoint } from "./hooks/useGetDataFromEndpoint";

type PersonType = {
    personId: string
}



export const PersonData = ({personId} : PersonType) => {
    const personUrl = `https://example-one-test.vercel.app/api/people/getPerson/${personId}`;

    const {data = {name: "", phone: "", address: ""}, loading, error} =  useGetDataFromEndpoint<Person>({url: personUrl});

    return (
        (loading ? <LoadingTile /> : <>
        <PersonTile name={data.name} address={data.address} phone={data?.phone} />
    </>)
        
    );
}