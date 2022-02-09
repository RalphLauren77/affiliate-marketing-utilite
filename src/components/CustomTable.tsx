import React, {FC} from 'react';
import {Data} from "../typedef";
import {Table} from "react-bootstrap";
import dayjs from "dayjs";

type Props = {
    data: Data[] | undefined,
    handleChoose?: (id: string) => void
}

export const CustomTable: FC<Props> = (props: Props) => {
    const {data, handleChoose} = props

    return (
        <Table className="table" hover>
            <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Number</th>
                <th scope="col">Category</th>
                <th scope="col">Last time update</th>
            </tr>
            </thead>
            <tbody>
            {data && data?.map((el, idx) =>
                (
                    <tr
                        key={el.id}
                        onClick={() => {
                            if (handleChoose) {
                                handleChoose(el.id)
                            }
                        }}
                    >
                        <th scope="row">{idx + 1}</th>
                        <td>
                            <p>{el.number}</p>
                        </td>
                        <td>{el.category}</td>
                        <td>{dayjs(el.lastTimeUpdate).format('ddd, MMM D, YYYY h:mm A')}</td>
                    </tr>)
            )}
            </tbody>
        </Table>

    );
};


