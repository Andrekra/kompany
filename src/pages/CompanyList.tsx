import React, {useCallback, useRef, useState} from "react"
import {CompaniesResultType} from "../api"
import {getCompanies} from "../api/client"
import {Link} from "react-router-dom"
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'

const Results: React.FC<{ results: CompaniesResultType[] | null }> = ({results}) => {
  if (!results) {
    return null
  }
  return (
    <Row>
      <ol start={1}>
        {results.length > 0 ? results.map((result) => (
          <Row as='li' key={result.id} id={result.id}>
            <article>
              <h2><Link to={`/companies/${result.id}`}>{result.name}</Link></h2>
            </article>
          </Row>
        )) : (
          <Row>
            <Alert variant='info'>Helaaa niets gevonden. Probeer een andere zoekterm.</Alert>
          </Row>
        )}
      </ol>
    </Row>
  )
}

const CompanyList = () => {
  const [results, setResults] = useState<CompaniesResultType[] | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(false)
  const handleSubmit = useCallback(async (event: any) => {
    setLoading(true)
    event.preventDefault()
    const search = inputRef.current?.value
    const results = await getCompanies(search)
    if (results?.data) {
      setResults(results.data)
    }
    setLoading(false)
  }, [setResults])

  return (
    <>
      <Row>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Voer een bedrijfsnaam in" autoFocus ref={inputRef}/>
            </Col>
            <Col xs="auto" className="my-1">
              <Button type="submit" disabled={loading}>Zoeken</Button>
            </Col>
          </Row>
        </Form>
      </Row>
      {loading ? (
        <Row>
          <Col>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Zoekende...</span>
            </Spinner>
          </Col>
        </Row>
      ) : <Results results={results}/>}
    </>
  )
}

export default CompanyList
