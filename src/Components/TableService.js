import React from "react";
import { Container, Table } from "react-bootstrap";

const TableService = () => {
  return (
    <div>
      <Container className="mt-3 text-center">
        <h1 className="mt-4 mb-3">Service Kami</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr style={{backgroundColor: "blue"}}>
              <th>Menu</th>
              <th>Harga</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pizza</td>
              <td>Rp. 100.000</td>
              <td>Harga Promo</td>
            </tr>
            <tr>
              <td>Jus Aplukat</td>
              <td>Rp.20.000</td>
              <td>Promo Spesial</td>
            </tr>
            <tr>
              <td>Jus Mangga</td>
              <td>Rp. 20.000</td>
              <td>Promo Spesial</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default TableService;
