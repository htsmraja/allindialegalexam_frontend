import React, { useState } from "react";
import { useAuthContext } from "../../context/authcontext";

const AddressManager = ({ addressList, onSelectShipping, onSelectBilling }) => {
    const { addUserAddressList, updateUserAdress } = useAuthContext();

    // Separate shipping/billing from main list
    const shippingAddress = Array.isArray(addressList?.data)
        ? addressList.data.filter((a) => a.type === "shipping_address")
        : [];

    const billingAddress = Array.isArray(addressList?.data)
        ? addressList.data.filter((a) => a.type === "billing_address")
        : [];

    // Local state
    const [showAllShipping, setShowAllShipping] = useState(false);
    const [showAllBilling, setShowAllBilling] = useState(false);
    const [click, setClick] = useState(false);
    const [editData, setEditData] = useState(null);
    const [selectedShippingAddressId, setSelectedShippingAddressId] = useState(null);
    const [selectedBillingAddressId, setSelectedBillingAddressId] = useState(null);

    // address form state
    const [addressInfo, setAddressInfo] = useState({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        type: "", // billing_address or shipping_address
        state: "",
        city: "",
        postal_code: "",
        address_line_1: "",
        address_line_2: "",
    });

    // handle new address
    const handleAddAddress = (e, type) => {
        e.preventDefault();
        e.stopPropagation();
        setEditData(null);
        setAddressInfo({
            first_name: "",
            last_name: "",
            email: "",
            mobile: "",
            type: type, // dynamically set billing/shipping
            state: "",
            city: "",
            postal_code: "",
            address_line_1: "",
            address_line_2: "",
        });
        setClick(true);
    };

    // handle edit existing address
    const handleEditAddress = (e, address) => {
        e.preventDefault();
        e.stopPropagation();
        setEditData(address);
        setClick(true);
        setAddressInfo({
            first_name: address.first_name || "",
            last_name: address.last_name || "",
            email: address.email || "",
            mobile: address.mobile || "",
            type: address.type || "",
            state: address.state || "",
            city: address.city || "",
            postal_code: address.postal_code || "",
            address_line_1: address.address_line_1 || "",
            address_line_2: address.address_line_2 || "",
        });
    };

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setAddressInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editData) {
            // edit mode
            updateUserAdress(editData.id, addressInfo);
        } else {
            // add mode
            addUserAddressList(addressInfo);
        }
        setClick(false);
    };

    const visibleShipping = showAllShipping
        ? shippingAddress
        : shippingAddress.slice(0, 3);
    const visibleBilling = showAllBilling
        ? billingAddress
        : billingAddress.slice(0, 3);

    // Handle the "same as billing" toggle
    const [sameAsBilling, setSameAsBilling] = useState(false);

    const handleSameAsBilling = () => {
        if (!selectedBillingAddressId) {
            window.alert("Please select the billing address first!");
            return; // stop execution
        }

        const newValue = !sameAsBilling;
        setSameAsBilling(newValue);

        if (newValue) {
            // Automatically set shipping address same as billing
            setSelectedShippingAddressId(selectedBillingAddressId);
            onSelectShipping && onSelectShipping(selectedBillingAddressId);
        } else {
            // Allow user to select shipping manually again
            setSelectedShippingAddressId(null);
        }
    };
    return (
        <div className="address-manager">
            {/* BILLING SECTION */}
            <div className="mt-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h5>Billing Addresses</h5>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={(e) => handleAddAddress(e, "billing_address")}
                    >
                        + Add Address
                    </button>
                </div>

                <div className="billing-address-container mt-3">
                    <div className="row">
                        {visibleBilling.map((address, index) => (
                            <div className="col-md-6" key={address.id || index}>
                                <div
                                    className={`miniAddressBx editBx mb-3 p-2 rounded ${selectedBillingAddressId === address.id
                                        ? "border activeBx"
                                        : "border inactiveBx"
                                        }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSelectedBillingAddressId(address.id);
                                        onSelectBilling && onSelectBilling(address.id);
                                    }}
                                    style={{ cursor: "pointer" }}
                                >
                                    <button
                                        className="btn btn-primary btn-sm mb-2"
                                        onClick={(e) => handleEditAddress(e, address)}
                                    >
                                        <i className="far fa-edit"></i> Edit
                                    </button>
                                    <ul>
                                        <li>{address.first_name} {address.last_name}</li>
                                        <li>{address.address_line_1}</li>
                                        {address.address_line_2 && <li>{address.address_line_2}</li>}
                                        <li>{address.city}</li>
                                        <li>{address.postal_code}</li>
                                        <li>{address.mobile}</li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {billingAddress.length > 3 && (
                        <button
                            className="btn btn-link p-0"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setShowAllBilling(!showAllBilling);
                            }}
                        >
                            {showAllBilling ? "− See Less" : "+ See All"}
                        </button>
                    )}
                </div>
            </div>

            <hr />
            {/* <div className="form-check mb-3">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="sameAsBilling"
                    checked={sameAsBilling}
                    onChange={handleSameAsBilling}
                    style={{
                        size
                    }}
                />
                <label htmlFor="sameAsBilling" className="form-check-label">
                    Same as Billing Address
                </label>
            </div> */}
            <div className="form-check mb-3">
                <input
                    type="checkbox"
                    className="form-check-input custom-checkbox"
                    id="sameAsBilling"
                    checked={sameAsBilling}
                    onChange={handleSameAsBilling}
                />
                <label htmlFor="sameAsBilling" className="form-check-label">
                    Same as Billing Address
                </label>
            </div>

            {/* SHIPPING SECTION */}
            {
                !sameAsBilling && (
                    <>

                        <div className="d-flex justify-content-between align-items-center">
                            <h5>Shipping Addresses</h5>
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={(e) => handleAddAddress(e, "shipping_address")}
                            >
                                + Add Address
                            </button>
                        </div>

                        <div className="mt-3">
                            <div className="row">
                                {visibleShipping.map((address, index) => (
                                    <div className="col-md-6" key={address.id || index}>
                                        <div
                                            className={`miniAddressBx editBx mb-3 p-2 rounded ${selectedShippingAddressId === address.id
                                                ? "border activeBx"
                                                : "border inactiveBx"
                                                }`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setSelectedShippingAddressId(address.id);
                                                onSelectShipping && onSelectShipping(address.id);
                                            }}
                                        >
                                            <button
                                                className="btn btn-primary btn-sm mb-2"
                                                onClick={(e) => handleEditAddress(e, address)}
                                            >
                                                <i className="far fa-edit"></i> Edit
                                            </button>
                                            <ul>
                                                <li>{address.first_name} {address.last_name}</li>
                                                <li>{address.address_line_1}</li>
                                                {address.address_line_2 && <li>{address.address_line_2}</li>}
                                                <li>{address.city}</li>
                                                <li>{address.postal_code}</li>
                                                <li>{address.mobile}</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}

                                {shippingAddress.length > 3 && (
                                    <button
                                        className="p-0"
                                        style={{ border: "1px solid #fff" }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setShowAllShipping(!showAllShipping);
                                        }}
                                    >
                                        {showAllShipping ? "− See Less" : "+ See All"}
                                    </button>
                                )}
                            </div>
                        </div></>
                )
            }


            {/* ADD / EDIT FORM */}
            {click && (
                <div className="newAddOrderBx mt-4">
                    <div>
                        <h3 className="title text-uppercase ls-10 pt-1 pb-3 mb-0">
                            {editData ? "Edit Address" : "Add New Address"}
                        </h3>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>First Name *</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    className="form-control"
                                    value={addressInfo.first_name}
                                    onChange={onChangeHandler}
                                />
                            </div>

                            <div className="form-group">
                                <label>Last Name *</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    className="form-control"
                                    value={addressInfo.last_name}
                                    onChange={onChangeHandler}
                                />
                            </div>

                            <div className="form-group">
                                <label>Street address *</label>
                                <input
                                    type="text"
                                    name="address_line_1"
                                    className="form-control mb-2"
                                    value={addressInfo.address_line_1}
                                    onChange={onChangeHandler}
                                    placeholder="House number and street name"
                                />
                                <input
                                    type="text"
                                    name="address_line_2"
                                    className="form-control"
                                    value={addressInfo.address_line_2}
                                    onChange={onChangeHandler}
                                    placeholder="Apartment, suite, etc. (optional)"
                                />
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <label>City *</label>
                                    <input
                                        type="text"
                                        name="city"
                                        className="form-control"
                                        value={addressInfo.city}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label>State *</label>
                                    <input
                                        type="text"
                                        name="state"
                                        className="form-control"
                                        value={addressInfo.state}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                            </div>

                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <label>ZIP *</label>
                                    <input
                                        type="text"
                                        name="postal_code"
                                        className="form-control"
                                        value={addressInfo.postal_code}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label>Phone *</label>
                                    <input
                                        type="text"
                                        name="mobile"
                                        className="form-control"
                                        value={addressInfo.mobile}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                            </div>

                            <div className="form-group mt-2">
                                <label>Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={addressInfo.email}
                                    onChange={onChangeHandler}
                                />
                            </div>

                            <div className="form-group mt-3">
                                <button type="submit" className="btn btn-dark">
                                    Save
                                </button>
                                &nbsp;
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setClick(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddressManager;
