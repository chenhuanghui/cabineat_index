const AirtablePlus = require('airtable-plus');  
const airtableBRAND = new AirtablePlus({
    baseID: 'appC6OeWNQhka12Im',
    apiKey: 'keyLNupG6zOmmokND'
});

class BrandEntity {
    helloWorld = () => {
        console.log("helloworld")
    }

    // getBrandByID = async(id) => {
    //     console.log("______ get brand by ID = ", id)    
        
    //     const brandData = await airtableBRAND.read({
    //         filterByFormula: `ID = "${id}"`,
    //         maxRecords: 1
    //     },{tableName:"Brand"});
    //     console.log("brand information: ", brandData)    
    //     if (brandData.length > 0) 
    //         return brandData[0].fields
    //     else return []
    // }

    // getFirstBrandByUserID = async(uID) => {
    //     const brandData = await airtableBRAND.read({
    //         filterByFormula: `userID = "${uID}"`,
    //         maxRecords: 1
    //     },{tableName:"Brand_User"});
        
    //     console.log("Brand_User information: ", brandData)      
    //     if (brandData.length > 0) return brandData[0].fields
    //     return []
    // }

    signin = async() => {
        
    }

    createBrand = async(dataObj) => {
        const brandData = await airtableBRAND.create({
            name: dataObj.name,
            email: dataObj.email,
            tel: dataObj.tel,
            package: dataObj.pack
        },{tableName:"Brand"});
        return brandData
    }
}

module.exports = BrandEntity;