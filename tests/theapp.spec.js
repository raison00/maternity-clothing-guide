import App from '../app';

describe('App Spec', () => {
  afterEach(() => {
    const insertedDiv = document.getElementsByClassName('insertedDiv');
    if (insertedDiv.length > 0) {
      insertedDiv[0].remove();
    }
  });
  it('should test start with #main', () => {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'example-partial');
    document.body.appendChild(newDiv);
    expect(document.getElementsByClassName('insertedDiv').length).toEqual(0);
    App.start();
    expect(document.getElementsByClassName('insertedDiv').length).toEqual(1);
    newDiv.remove();
  });

  it('should test start without #main', () => {
    expect(document.getElementsByClassName('insertedDiv').length).toEqual(0);
    App.start();
    expect(document.getElementsByClassName('insertedDiv').length).toEqual(0);
  });
});
