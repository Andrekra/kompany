import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {getCompanyDetails, getCompany} from "../api/client"
import {CompaniesResultType, GetCompanyDetailsPayloadType} from "../api"

const CompanyDetails = () => {
  const {id} = useParams()
  const [payload, setPayload] = useState<CompaniesResultType | undefined>(undefined)
  const [payloadDetails, setPayloadDetails] = useState<GetCompanyDetailsPayloadType['data'] | undefined>(undefined)

  useEffect(() => {
    const load = async () => {
      if (id) {
        const result = await getCompany(id)
        if (!result) {
          // Not implemented. Can go to error page, or show the data we do have.
          // For performance, don't perform the other API call assuming customer doesn't want half the information.
          return
        }
        const details = await getCompanyDetails(id)
        if (details) {
          setPayloadDetails(details.data)
          setPayload(result)
        }
      }
    }
    load()
  }, [id])

  return <>
    {payload && <pre>{JSON.stringify(payload)}</pre>}
    {payloadDetails && <pre>{JSON.stringify(payloadDetails[0])}</pre>}
  </>
}

export default CompanyDetails
