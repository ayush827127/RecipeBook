import React from 'react'
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div className="loading-page">
      <div className="loading-content">
        <h1>Loading...</h1>
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
      </div>
    </div>
  )
}

export default Loading