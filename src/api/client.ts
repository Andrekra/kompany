type CompaniesResultType = {
    id: string,
    city: string,
    createdAt: string,
    logo: string,
    name: string,
    streetName: string,
    zipCode: string
}

type GetCompaniesPayloadType = {
    data: CompaniesResultType[]
}

const request = async (path: string, params = {}) => {
    const response = await fetch(`https://617c09aad842cf001711c200.mockapi.io/v1/${path}`, {
        headers: {
            'Content-Type': 'application/json'
          },
          ...params
    })
    return response.json()    
}

export const getCompanies = (search?: string):Promise<GetCompaniesPayloadType> => {
    if (!search) {
        return request('/companies')
    }

    const params = new URLSearchParams()
    params.append('search', search)
    return request(`/companies?${params.toString()}`)
}

export const getCompany = async (id: string) => request(`/company/${id}`)

export const getCompanyDetails = async (id: string) => request(`/company/${id}/details`)