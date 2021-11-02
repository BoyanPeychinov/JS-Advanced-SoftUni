function deleteByEmail() {
    // select input field and read value
    const input = document.querySelector('input[name="email"]');

    // get tbody children
    const rows = Array
    .from(document.querySelector('tbody').children)
    .filter(r => r.children[1].textContent == input.value);
    
    rows.forEach(r => r.remove());

    // repeat for every row:
    // -- select second cell
    // -- if textContent matches input value -> remove row
    // if there is a match print 'Deleted.'
    // otherwise, print 'Not found.'
    document.getElementById('result').textContent = rows.length > 0 ? 'Deleted.' : 'Not found.';
}