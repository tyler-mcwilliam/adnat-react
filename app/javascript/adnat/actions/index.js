const BASE_URL = '/api/v1';

export function fetchUsers() {
  const url = `${BASE_URL}/organisations`;
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());

  return {
    type: 'FETCH_ORGANISATIONS',
    payload: promise // Will be resolved by redux-promise
  };
}

export function fetchOrganisations() {
  const url = `${BASE_URL}/organisations`;
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());

  return {
    type: 'FETCH_ORGANISATIONS',
    payload: promise // Will be resolved by redux-promise
  };
}

export function createOrganisation(name, hourlyRate) {
  const url = `/organisations/`;
  const body = {
    "name": name,
    "hourlyRate": hourlyRate
  };
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(res => res.text()).then(text => console.log(text))

  return {
    type: 'ORGANISATION_POSTED',
    payload: promise // Will be resolved by redux-promise
  };
}

export function fetchShifts(organisation) {
  const url = `${BASE_URL}/organisations/${organisation.name}/shifts`;
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());

  return {
    type: 'FETCH_SHIFTS',
    payload: promise // Will be resolved by redux-promise
  };
}

export function createShift(organisation, date, start, finish, breakLength) {
  const url = `${BASE_URL}/organisations/${organisation}/shifts`;
  const body = {
    "start": new Date("27 July 2016 13:30:00 GMT+05:45"),
    "finish": new Date("27 July 2016 18:30:00 GMT+05:45"),
    "break_length": breakLength
  };
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(res => res.text()).then(text => console.log(text));

  return {
    type: 'SHIFT_POSTED',
    payload: promise // Will be resolved by redux-promise
  }
}

export function selectOrganisation(organisation) {
  return {
    type: 'ORGANISATION_SELECTED',
    payload: organisation
  }
}

export function appendShift(shift) {
  return {
    type: 'SHIFT_POSTED',
    payload: shift
  }
}
