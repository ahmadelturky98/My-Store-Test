module.exports = {
    
    "COMBINATION TESTS (TEST1)" : function(browser) { 
        
        //Combination ONE...............................................................................//
        browser.url("http://automationpractice.multiformis.com/index.php");

        browser.click("#contact-link > a");  //Click on contact us

        browser.expect.element("#center_column > div").to.not.be.present;
        
        browser.click("#submitMessage > span"); //Click on send
    
        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Invalid email address.");

        browser.click("#email");
        browser.keys("ahmadelturky98@gmail.com"); //Write email
        
        browser.click("#submitMessage > span"); //Click on send
        
        browser.expect.element("#center_column > div").to.be.visible; //ERROR
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("The message cannot be blank.");
        

        browser.click("#message"); //Click on message
        browser.keys("Hello, there was an item missing from my order, the white shoes. Order #12345");
        
        browser.click("#submitMessage > span"); //Click send

        
        browser.expect.element("#center_column > div").to.be.visible;//ERROR
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Please select a subject from the list provided.");
        
        browser.setValue("#id_contact", "Customer service"); //Choose Customer service
        browser.expect.element("#desc_contact2").text.to.equal("For any question about a product, an order");

        browser.click("#submitMessage > span"); //Click on send
        browser.expect.element("#center_column > p").to.be.visible;

        
        //Combination TWO...............................................................................//
        browser.url("http://automationpractice.multiformis.com/index.php");

        browser.click("#contact-link > a");

        browser.expect.element("#center_column > div").to.not.be.present;
        
        browser.click("#submitMessage > span");
    
        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Invalid email address.");

        browser.click("#email");
        browser.keys("ahmadelturky98@gmail.com");
        
        browser.click("#submitMessage > span");
        
        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("The message cannot be blank.");
        
        browser.setValue("#id_contact", "Webmaster"); //Choose Webmaster
        browser.expect.element("#desc_contact1").text.to.equal("If a technical problem occurs on this website");
        
        browser.click("#submitMessage > span");

        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("The message cannot be blank.");
        
        browser.click("#message");
        browser.keys("Hello, there was an item missing from my order, the white shoes. Order #12345");
        
        browser.click("#submitMessage > span");
        browser.expect.element("#center_column > p").to.be.visible;

        //Combination THREE...............................................................................//
        browser.url("http://automationpractice.multiformis.com/index.php");

        browser.click("#contact-link > a");  //Click on contact us

        browser.expect.element("#center_column > div").to.not.be.present;
        
        browser.click("#submitMessage > span"); //Click on send
    
        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Invalid email address.");

        browser.setValue("#id_contact", "Customer service"); //Choose Customer service
        browser.expect.element("#desc_contact2").text.to.equal("For any question about a product, an order");
        
        browser.click("#submitMessage > span"); //Click on send
        
        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Invalid email address.");

        browser.click("#email");
        browser.keys("ahmadelturky98@gmail.com"); //Write email

        browser.click("#submitMessage > span"); //Click send

        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("The message cannot be blank.");
        
        browser.click("#message"); //Click on message
        browser.keys("Hello, there was an item missing from my order, the white shoes. Order #12345");

        browser.click("#submitMessage > span"); //Click on send
        browser.expect.element("#center_column > p").to.be.visible;

        //Combination FOUR...............................................................................//
        browser.url("http://automationpractice.multiformis.com/index.php");

        browser.click("#contact-link > a");  //Click on contact us

        browser.expect.element("#center_column > div").to.not.be.present;
        
        browser.click("#submitMessage > span"); //Click on send
    
        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Invalid email address.");

        browser.setValue("#id_contact", "Webmaster"); //Choose Webmaster
        browser.expect.element("#desc_contact1").text.to.equal("If a technical problem occurs on this website");
        
        browser.click("#submitMessage > span"); //Click on send
        
        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Invalid email address.");

        browser.click("#message"); //Click on message
        browser.keys("Hello, there was an item missing from my order, the white shoes. Order #12345");

        browser.click("#submitMessage > span"); //Click send

        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Invalid email address.");
        
        browser.click("#email");
        browser.keys("ahmadelturky98@gmail.com"); //Write email
    
        browser.click("#submitMessage > span"); //Click on send
        browser.expect.element("#center_column > p").to.be.visible;

        //Combination FIVE...............................................................................//
        browser.url("http://automationpractice.multiformis.com/index.php");

        browser.click("#contact-link > a");  //Click on contact us

        browser.expect.element("#center_column > div").to.not.be.present;
        
        browser.click("#submitMessage > span"); //Click on send
    
        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Invalid email address.");

        browser.click("#message"); //Click on message
        browser.keys("Hello, there was an item missing from my order, the white shoes. Order #12345");
        
        browser.click("#submitMessage > span"); //Click on send
        
        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Invalid email address.");

        browser.setValue("#id_contact", "Customer service"); //Choose Customer service
        browser.expect.element("#desc_contact2").text.to.equal("For any question about a product, an order");
        
        browser.click("#submitMessage > span"); //Click send

        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Invalid email address.");
        
        browser.click("#email");
        browser.keys("ahmadelturky98@gmail.com"); //Write email
    
        browser.click("#submitMessage > span"); //Click on send
        browser.expect.element("#center_column > p").to.be.visible;

        //Combination SIX...............................................................................//
        browser.url("http://automationpractice.multiformis.com/index.php");

        browser.click("#contact-link > a");  //Click on contact us

        browser.expect.element("#center_column > div").to.not.be.present;
        
        browser.click("#submitMessage > span"); //Click on send
    
        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Invalid email address.");

        browser.click("#message"); //Click on message
        browser.keys("Hello, there was an item missing from my order, the white shoes. Order #12345");
        
        browser.click("#submitMessage > span"); //Click on send
        
        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Invalid email address.");

        browser.click("#email");
        browser.keys("ahmadelturky98@gmail.com"); //Write email

        browser.click("#submitMessage > span"); //Click send

        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Please select a subject from the list provided.");
        
        browser.setValue("#id_contact", "Webmaster"); //Choose Webmaster
        browser.expect.element("#desc_contact1").text.to.equal("If a technical problem occurs on this website");
    
        browser.click("#submitMessage > span"); //Click on send
        browser.expect.element("#center_column > p").to.be.visible;

        //Combination SEVEN...............................................................................//
        browser.url("http://automationpractice.multiformis.com/index.php");

        browser.click("#contact-link > a");  //Click on contact us

        browser.expect.element("#center_column > div").to.not.be.present;

        browser.click("#email");
        browser.keys("ahmadelturky98@gmail.com"); //Write email
        
        browser.setValue("#id_contact", "Customer service"); //Choose Customer service
        browser.expect.element("#desc_contact2").text.to.equal("For any question about a product, an order");
    
        browser.click("#submitMessage > span"); //Click on send
        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("The message cannot be blank.");

        browser.click("#message"); //Click on message
        browser.keys("Hello, there was an item missing from my order, the white shoes. Order #12345");
        
        browser.click("#submitMessage > span"); //Click on send
        browser.expect.element("#center_column > p").to.be.visible;
        
        //Combination EIGHT...............................................................................//
        browser.url("http://automationpractice.multiformis.com/index.php");

        browser.click("#contact-link > a");  //Click on contact us

        browser.expect.element("#center_column > div").to.not.be.present;
        browser.click("#message"); //Click on message
        browser.keys("Hello, there was an item missing from my order, the white shoes. Order #12345");
        
        
        browser.setValue("#id_contact", "Customer service"); //Choose Customer service
        browser.expect.element("#desc_contact2").text.to.equal("For any question about a product, an order");

        browser.click("#submitMessage > span"); //Click on send
        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Invalid email address.");

        browser.click("#email");
        browser.keys("ahmadelturky98@gmail.com"); //Write email
        
        browser.click("#submitMessage > span"); //Click on send
        browser.expect.element("#center_column > p").to.be.visible;

        //Combination NINE...............................................................................//
        browser.url("http://automationpractice.multiformis.com/index.php");

        browser.click("#contact-link > a");  //Click on contact us

        browser.expect.element("#center_column > div").to.not.be.present;

        browser.click("#message"); //Click on message
        browser.keys("Hello, there was an item missing from my order, the white shoes. Order #12345");
        
        browser.click("#email");
        browser.keys("ahmadelturky98@gmail.com"); //Write email

        browser.click("#submitMessage > span"); //Click on send
    
        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Please select a subject from the list provided.");
        

        browser.setValue("#id_contact", "Webmaster"); //Choose Webmaster
        browser.expect.element("#desc_contact1").text.to.equal("If a technical problem occurs on this website");
        
        browser.click("#submitMessage > span"); //Click on send
        browser.expect.element("#center_column > p").to.be.visible;
        
    },
    
    "No File Upload Only (TEST 2)" : function(browser) { 
        browser.url("http://automationpractice.multiformis.com/index.php");

        browser.click("#contact-link > a");

        browser.setValue("#id_contact", "Customer Service");

        browser.click("#email");
        browser.keys("ahmadelturky98@gmail.com");

        browser.click("#id_order");
        browser.keys("12345");

        browser.click("#message");
        browser.keys("Hello, there was an item missing from my order, the white shoes. Order #12345");

        browser.click("#submitMessage > span");
        browser.expect.element("#center_column > p").to.be.visible;
    },

    'File Upload (TEST 3)':  function (browser) {
        browser.url("http://automationpractice.multiformis.com/index.php");

        browser.click("#contact-link > a");

        browser.setValue("#id_contact", "Customer Service");

        browser.click("#email");
        browser.keys("ahmadelturky98@gmail.com");
       
        browser.waitForElementVisible('#uniform-fileUpload > span.action')
        browser.click('#uniform-fileUpload');
        browser.setValue('input[type="file"]', require('path').resolve(__dirname + '/../reciept.jpeg'))

        browser.expect.element("#uniform-fileUpload > span.filename").text.to.equal("reciept.jpeg");

        browser.click("#message");
        browser.keys("Hello, there was an item missing from my order, the white shoes. Order #12345");

        browser.click("#submitMessage > span");
        browser.expect.element("#center_column > p").to.be.visible;
        
        browser.end();  
    },

    'Fill All the Fields (TEST 4)': function (browser) {
        browser.url("http://automationpractice.multiformis.com/index.php");

        browser.click("#contact-link > a");

        browser.setValue("#id_contact", "Customer Service");

        browser.click("#email");
        browser.keys("ahmadelturky98@gmail.com");

        browser.click("#id_order");
        browser.keys("12345");

        browser.waitForElementVisible('#uniform-fileUpload > span.action')
        browser.click('#uniform-fileUpload');
        browser.setValue('input[type="file"]', require('path').resolve(__dirname + '/../reciept.jpeg'))

        browser.click("#message");
        browser.keys("Hello, there was an item missing from my order, the white shoes. Order #12345");

        browser.click("#submitMessage > span");
        browser.expect.element("#center_column > p").to.be.visible;
        
        browser.end();  
    },

    'Fill One Field (TEST 5)': function (browser) {
        browser.url("http://automationpractice.multiformis.com/index.php");

        browser.click("#contact-link > a");
        browser.setValue("#id_contact", "Customer Service");

        browser.click("#submitMessage > span");
        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Invalid email address.");

        

        browser.url("http://automationpractice.multiformis.com/index.php");

        browser.click("#contact-link > a");

        browser.setValue("#id_contact", "Webmaster");

        browser.click("#submitMessage > span");

        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Invalid email address.");



        browser.url("http://automationpractice.multiformis.com/index.php");

        browser.click("#contact-link > a");

        browser.click("#email");
        browser.keys("ahmadelturky98@gmail.com");

        browser.click("#submitMessage > span");

        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("The message cannot be blank.");
        


        browser.url("http://automationpractice.multiformis.com/index.php");

        browser.click("#contact-link > a");

        browser.click("#id_order");
        browser.keys("12345");

        browser.click("#submitMessage > span");

        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Invalid email address.");



        browser.url("http://automationpractice.multiformis.com/index.php");

        browser.click("#contact-link > a");

        browser.click('#uniform-fileUpload');
        browser.setValue('input[type="file"]', require('path').resolve(__dirname + '/../reciept.jpeg'))

        browser.click("#submitMessage > span");

        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Invalid email address.");
        


        browser.url("http://automationpractice.multiformis.com/index.php");

        browser.click("#contact-link > a");

        browser.click("#message");
        browser.keys("Hello, there was an item missing from my order, the white shoes. Order #12345");


        browser.click("#submitMessage > span");

        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Invalid email address.");
        
        browser.end(); 
    },
    
    'Invalid Email (TEST 6)': function (browser) {
        browser.url("http://automationpractice.multiformis.com/index.php");

        browser.click("#contact-link > a");

        browser.setValue("#id_contact", "Customer Service");

        browser.click("#email");
        browser.keys("ahmadelturky98");
        

        browser.click("#id_order");
        browser.keys("12345");
        
        browser.waitForElementVisible('#uniform-fileUpload > span.action')
        browser.click('#uniform-fileUpload');
        browser.setValue('input[type="file"]', require('path').resolve(__dirname + '/../reciept.jpeg'))
        

        browser.click("#message");
        browser.keys("Hello, there was an item missing from my order, the white shoes. Order #12345");
        browser.pause(3 * 1000);

        browser.click("#submitMessage > span");
        browser.expect.element("#center_column > div").to.be.visible;
        browser.expect.element("#center_column > div > p").text.to.equal("There is 1 error");
        browser.expect.element("#center_column > div > ol > li").text.to.equal("Invalid email address.");
        
        browser.end();  
    },

    'Search for dress (TEST 7)':  function (browser) {
        browser.url("http://automationpractice.multiformis.com/index.php");

        browser.click("#search_query_top");

        browser.keys("dress");

        browser.click("#searchbox > button");

        browser.expect.element("#columns").to.be.visible;

        browser.expect.element("#center_column").to.be.visible;
        
        browser.expect.element("#center_column > div:nth-child(2) > div.sortPagiBar.clearfix").to.be.visible;
        browser.expect.element("#center_column > h1 > span.lighter").text.to.equal("\"DRESS\"");

        browser.end();  
    },
};