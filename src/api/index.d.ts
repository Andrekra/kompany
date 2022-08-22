export type CompaniesResultType = {
  id: string,
  city: string,
  createdAt: string,
  logo: string,
  name: string,
  streetName: string,
  zipCode: string
}

export type GetCompaniesPayloadType = {
  data: CompaniesResultType[]
}

type CompanyDetailsType = {
  catchPhrase: string
  companyId: string
  id: string
  phoneNumber: string
  website: string
}
export type GetCompanyDetailsPayloadType = {
  data: CompanyDetailsType[]
}
