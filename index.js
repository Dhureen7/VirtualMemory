function formSubmission1() {
    let address = document.getElementById('address').value;
    let bit_address = Math.ceil(Math.log2(address));
    let page_size = document.getElementById('page_size').value;
  
    const toggleSwitch = document.getElementById('mb_toggle1');
  
    if (toggleSwitch.checked) {
      page_size *= 1024;
    }
  
    let max_pages = maxPage(page_size, bit_address);
  
    document.getElementById('result1').innerHTML = max_pages;
  
    event.preventDefault();
    return false;
}
  

function maxPage(page_size, bit_address) {
    let page_bits = Math.log2(page_size) + 10;
    const pages = 2 ** (bit_address - page_bits);

    return `<h4>${pages} pages can be addressed.</h4>`;
}

function formSubmission3() {
    let physical_size = document.getElementById('physical').value * 1024 * 1024 * 1024;
    let page_size = document.getElementById('pagesize').value * 1024;

    console.log(physical_size);
    console.log(page_size);

    const toggleSwitch = document.getElementById('mb_toggle2');
    if (toggleSwitch.checked) {
        page_size *= 1024;
    }

    let no_of_pages = numberOfPages(physical_size, page_size);

    document.getElementById('result3').innerHTML = no_of_pages;

    return false;
}

function numberOfPages (physical_size, page_size) {
    let pages = Math.ceil((physical_size)/page_size);

    return `<h4>${pages} pages can be stored in physical memory.</h4>`;
}