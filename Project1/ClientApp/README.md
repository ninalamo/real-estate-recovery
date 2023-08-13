


## Setup

### react app

Make sure to `npm install` the following: `react-leaflet`, `leaflet` and `react-leaflet-vector-tile-layer`.

Make sure that Identity server database has been setup and connecting successfully.

Use the following connectionstring format:<br/>

`
 "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=aspnet-Project1;User Id=xxx;Password=xxx;TrustServerCertificate=true;MultiSubNetFailover=True;"
  },
`

### .Net Core

Run migration for EF Core: <br/> 
`"C:\Program Files\dotnet\dotnet.exe" ef database update --project Project1\Project1.csproj --startup-project Project1\Project1.csproj --context Project1.Data.ApplicationDbContext --configuration Debug 00000000000000_CreateIdentitySchema`

## Running the app

On the terminal or command-line, run `dotnet run` command. Make sure you have installed latest .NET 7.0 SDK and Node.js (latest).