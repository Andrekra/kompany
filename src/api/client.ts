import {CompaniesResultType, GetCompaniesPayloadType, GetCompanyDetailsPayloadType} from "./index"

const request = async <T>(path: string): Promise<T> => {
  const response = await fetch(`https://617c09aad842cf001711c200.mockapi.io/v1${path}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

export const getCompanies = (search?: string): Promise<GetCompaniesPayloadType> => {
  if (!search) {
    return request<GetCompaniesPayloadType>('/companies')
  }

  const params = new URLSearchParams()
  params.append('search', search)
  return request(`/companies?${params.toString()}`)
}

export const getCompany = async (id: string) => request<CompaniesResultType>(`/companies/${id}`)

export const getCompanyDetails = async (id: string) => request<GetCompanyDetailsPayloadType>(`/companies/${id}/details`)
