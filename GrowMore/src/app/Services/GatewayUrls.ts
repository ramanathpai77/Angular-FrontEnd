export class GatewayUrls{
    readonly LoginEndpoint: string = 'http://localhost:60734/api/auth/User/Login';
readonly RegisterEndpoint: string = 'http://localhost:60734/api/auth/User/register';
readonly CompanyEndpoint: string = 'http://localhost:60734/api/companyservice/Company';
readonly IPOEndpoint: string = 'http://localhost:60734/api/companyservice/IPO';
readonly SectorEndpoint: string = 'http://localhost:60734/api/sectorservice/Sector';
readonly SectorbyEndpoint: string = 'http://localhost:60734/api/sectorservice/companybysector';
readonly StockEndpoint: string = 'http://localhost:60734/api/companyservice/Company/StockPrice';

readonly seEndpoint: string = 'http://localhost:60734/api/se/StockExchange'; 
}