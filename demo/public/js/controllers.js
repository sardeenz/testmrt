'use strict';


var tabs = [
        {
            id: "identity",
            name: "Contact",
            icon: "glyphicon glyphicon-user",
            active: true,
            panes: [
                { name: "Identity/Contact",
                    fields1: [{ id: "nationality", name: "Nationality"},
                        { id: "dob", name: "Date of birth/foundation"},
                        { id: "nationalid", name: "National ID"},
                        { id: "referenceno", name: "Reference Number"}],
                    fields2: [{ id: "contact_type", name: "Contact type"},
                        { id: "organization_name", name: "Organization name"},
                        { id: "gender", name: "Gender"},
                        { id: "chamber_na", name: "Chamber of commerce no"}
                    ]
                },
                { name: "Name",
                    fields1: [{ id: "surname_first", name: "Surname first"},
                        { id: "surname_prefix_second", name: "Surname second"},
                        { id: "givenfullname", name: "Given names"},
                        { id: "givenfullname", name: "Given names full"},
                        { id: "completename", name: "Complete name"}],
                    fields2: [{ id: "surname_prefix_first", name: "Surname prefix first"},
                        { id: "surname_prefix_second", name: "Surname prefix second"},
                        { id: "givennameinitials", name: "Given names initials"},
                        { id: "indicator", name: "Indicator"}]
                },
                { name: "Name qualifiers",
                    fields1: [{ id: "formofaddress", name: "Form of address"},
                        { id: "qualificationpreceding", name: "Qualification preceding"},
                        { id: "qualification_int_first", name: "Qualification intermediate first"},
                        { id: "qualification_int_second", name: "Qualification intermediate second"}],
                    fields2: [{ id: "qualification_suceeding", name: "Qualification succeeding"},
                        { id: "name_qualified", name: "Name qualified"},
                        { id: "surname_prefix_first", name: "Compound surname"},
                        { id: "function", name: "Function"}]
                },
                { name: "Creation and mutation date and time",
                    fields1: [{ id: "creation_date_na", name: "Creation date"}],
                    fields2: [{ id: "date_last_modified_na", name: "Date of last modification"}]
                }
            ]
        },
        {
            id: "address",
            name: "Address",
            icon: "glyphicon glyphicon-globe",
            panes: [
                { name: "Delivery",
                    fields1: [{ id:"inputEmail3", name: "Key"},
                        { id:"thoroughfare", name: "Street name"},
                        { id:"houseNumber", name: "House number"},
                        { id:"houseNumberAddition", name: "House number addition"},
                        { id:"postalCode", name: "Postal code"},
                        { id:"postTown", name: "Post town"},
                        { id:"inputEmail3", name: "Delivery Service Indicator"},
                        { id:"name", name: "Name"},
                        { id:"organization", name: "Organization"},
                        { id:"department", name: "Department"}],
                    fields2: [{ id:"inputEmail3", name: "Dependent street name"},
                        { id:"province", name: "Administrative area/Province"},
                        { id:"subDistrict", name: "Subadministrative area"},
                        { id:"locality", name: "Locality"},
                        { id:"district", name: "Dependent locality"},
                        { id:"postBox", name: "Postbox"},
                        { id:"premise", name: "Premise"},
                        { id:"inputEmail3", name: "Subpremise"},
                        { id:"countryName", name: "Country name"},
                        { id:"countryCode", name: "Country code", type: "select"}]
                },
                { name: "Address lines",
                    fields1: [{ id:"addressLine1", name: "Address line 1"},
                        { id:"addressLine2", name: "Address line 2"},
                        { id:"addressLine3", name: "Address line 3"},
                        { id:"addressLine4", name: "Address line 4"},
                        { id:"addressLine5", name: "Address line 5"}],
                    fields2: [{ id:"addressLine6", name: "Address line 6"},
                        { id:"addressLine7", name: "Address line 7"},
                        { id:"addressLine8", name: "Address line 8"},
                        { id:"addressLine9", name: "Address line 9"},
                        { id:"addressLine10", name: "Address line 10"}]
                },
                { name: "Additional information",
                    fields1: [{ id:"hausCode", name: "Hauscode/Leitcode, Province/County"},
                        { id:"municipalityCode", name: "Municipality, Urban Area, Lot #"},
                        { id:"eggCode", name: "EGG code, Congressional District"},
                        { id:"lacsIndicator", name: "CeBuCo code, LACS Indicator"},
                        { id:"latitude", name: "Geocoding - Latitude"},
                        { id:"longitude", name: "Geocoding - Longitude"}],
                    fields2: [{ id:"address_options", name: "Options"},
                        { id:"inputEmail3", name: "Pre/Post Directional Indicator"},
                        { id:"address_adaptation", name: "Adaptation Code"},
                        { id:"address_reliability", name: "Reliability Code"},
                        { id:"address_detailCode", name: "Detail Code"}]
                },
                { name: "Creation and mutation date and time",
                    fields1: [{ id:"inputEmail3", name: "Creation date"}],
                    fields2: [{ id:"inputEmail3", name: "Date of last modification"}]
                }
            ]},
        {
            id: "email",
            name: "Email",
            icon: "glyphicon glyphicon-envelope",
            panes: [
                /*            { name: "Contact",
                 fields1: [],
                 fields2: []
                 },*/
                { name: "Email",
                    fields1: [{ id:"full_email_address", name: "Full email address"},
                        { id:"addressee", name: "Addressee"},
                        { id:"display_name", name: "Display name"}],
                    fields2: [{ id:"domain", name: "Domain name"},
                        { id:"top_level", name: "Top level domain"}]
                }
            ]},
        {
            id: "phone",
            name: "Phone",
            icon: "glyphicon glyphicon-earphone",
            panes: [
                { name: "Phone",
                    fields1: [{ id:"phone_number", name: "Phone number"},
                        { id:"calling_from", name: "Calling from country code"},
                        { id:"phone_countryCode", name: "Country code"},
                        { id:"formatted_international", name: "Formatted out of country calling"},
                        { id:"line_type", name: "Line type"}],
                    fields2: [{ id:"international_prefix", name: "International call prefix"},
                        { id:"calling_code", name: "Country calling code"},
                        { id:"trunk", name: "Trunk prefix"},
                        { id:"area_code", name: "Area code"},
                        { id:"number", name: "Subscriber number"}]
                }
            ]}
    ];
var tabs_global = [
    {
        id: "identity",
        name: "Contact",
        icon: "glyphicon glyphicon-user",
        active: true,
        panes: [
            { name: "Identity/Contact",
                fields1: [{ id: "nationality", name: "Nationality2"},
                    { id: "dob", name: "Date of birth/foundation"},
                    { id: "nationalid", name: "National ID"}],
                fields2: [{ id: "contact_type", name: "Contact type"},
                    { id: "organization_name", name: "Organization name"},
                    { id: "gender", name: "Gender"},
                    { id: "chamber_na", name: "Chamber of commerce no"}
                ]
            },
            { name: "Name",
                fields1: [{ id: "surname_first", name: "Surname first"},
                    { id: "surname_prefix_second", name: "Surname second"},
                    { id: "givenfullname", name: "Given names"},
                    { id: "givenfullname", name: "Given names full"},
                    { id: "completename", name: "Complete name"}],
                fields2: [{ id: "surname_prefix_first", name: "Surname prefix first"},
                    { id: "surname_prefix_second", name: "Surname prefix second"},
                    { id: "givennameinitials", name: "Given names initials"},
                    { id: "indicator", name: "Indicator"}]
            },
            { name: "Name qualifiers",
                fields1: [{ id: "formofaddress", name: "Form of address"},
                    { id: "qualificationpreceding", name: "Qualification preceding"},
                    { id: "qualification_int_first", name: "Qualification intermediate first"},
                    { id: "qualification_int_second", name: "Qualification intermediate second"}],
                fields2: [{ id: "qualification_suceeding", name: "Qualification succeeding"},
                    { id: "name_qualified", name: "Name qualified"},
                    { id: "surname_prefix_first", name: "Compound surname"},
                    { id: "function", name: "Function"}]
            },
            { name: "Creation and mutation date and time",
                fields1: [{ id: "creation_date_na", name: "Creation date"}],
                fields2: [{ id: "date_last_modified_na", name: "Date of last modification"}]
            }
        ]
    },
    {
        id: "address",
        name: "Address",
        icon: "glyphicon glyphicon-globe",
        panes: [
            { name: "Delivery",
                fields1: [{ id:"inputEmail3", name: "Key"},
                    { id:"thoroughfare", name: "Street name"},
                    { id:"houseNumber", name: "House number"},
                    { id:"houseNumberAddition", name: "House number addition"},
                    { id:"postalCode", name: "Postal code"},
                    { id:"postTown", name: "Post town"},
                    { id:"inputEmail3", name: "Delivery Service Indicator"},
                    { id:"name", name: "Name"},
                    { id:"organization", name: "Organization"},
                    { id:"department", name: "Department"}],
                fields2: [{ id:"inputEmail3", name: "Dependent street name"},
                    { id:"province", name: "Administrative area/Province"},
                    { id:"subDistrict", name: "Subadministrative area"},
                    { id:"locality", name: "Locality"},
                    { id:"district", name: "Dependent locality"},
                    { id:"postBox", name: "Postbox"},
                    { id:"premise", name: "Premise"},
                    { id:"inputEmail3", name: "Subpremise"},
                    { id:"countryName", name: "Country name"},
                    { id:"countryCode", name: "Country code", type: "select"}]
            },
            { name: "Address lines",
                fields1: [{ id:"addressLine1", name: "Address line 1"},
                    { id:"addressLine2", name: "Address line 2"},
                    { id:"addressLine3", name: "Address line 3"},
                    { id:"addressLine4", name: "Address line 4"},
                    { id:"addressLine5", name: "Address line 5"}],
                fields2: [{ id:"addressLine6", name: "Address line 6"},
                    { id:"addressLine7", name: "Address line 7"},
                    { id:"addressLine8", name: "Address line 8"},
                    { id:"addressLine9", name: "Address line 9"},
                    { id:"addressLine10", name: "Address line 10"}]
            },
            { name: "Additional information",
                fields1: [{ id:"hausCode", name: "Hauscode/Leitcode, Province/County"},
                    { id:"municipalityCode", name: "Municipality, Urban Area, Lot #"},
                    { id:"eggCode", name: "EGG code, Congressional District"},
                    { id:"lacsIndicator", name: "CeBuCo code, LACS Indicator"},
                    { id:"latitude", name: "Geocoding - Latitude"},
                    { id:"longitude", name: "Geocoding - Longitude"}],
                fields2: [{ id:"address_options", name: "Options"},
                    { id:"inputEmail3", name: "Pre/Post Directional Indicator"},
                    { id:"address_adaptation", name: "Adaptation Code"},
                    { id:"address_reliability", name: "Reliability Code"},
                    { id:"address_detailCode", name: "Detail Code"}]
            },
            { name: "Creation and mutation date and time",
                fields1: [{ id:"inputEmail3", name: "Creation date"}],
                fields2: [{ id:"inputEmail3", name: "Date of last modification"}]
            }
        ]},
    {
        id: "email",
        name: "Email",
        icon: "glyphicon glyphicon-envelope",
        panes: [
            /*            { name: "Contact",
             fields1: [],
             fields2: []
             },*/
            { name: "Email",
                fields1: [{ id:"full_email_address", name: "Full email address"},
                    { id:"addressee", name: "Addressee"},
                    { id:"display_name", name: "Display name"}],
                fields2: [{ id:"domain", name: "Domain name"},
                    { id:"top_level", name: "Top level domain"}]
            }
        ]},
    {
        id: "phone",
        name: "Phone",
        icon: "glyphicon glyphicon-earphone",
        panes: [
            { name: "Phone",
                fields1: [{ id:"phone_number", name: "Phone number"},
                    { id:"calling_from", name: "Calling from country code"},
                    { id:"phone_countryCode", name: "Country code"},
                    { id:"formatted_international", name: "Formatted out of country calling"},
                    { id:"line_type", name: "Line type"}],
                fields2: [{ id:"international_prefix", name: "International call prefix"},
                    { id:"calling_code", name: "Country calling code"},
                    { id:"trunk", name: "Trunk prefix"},
                    { id:"area_code", name: "Area code"},
                    { id:"number", name: "Subscriber number"}]
            }
        ]}
];
var empty_input = {
    address: {
        houseNumber: "",
        houseNumberAddition: "",
        postalCode: "",
        postTown: "",
        name: "",
        organization: "",
        department: "",
        province: "",
        subDistrict: "",
        locality: "",
        postBox: "",
        premise: "",
        countryName: "",
        countryCode: "",
        addressLine1: "",
        addressLine2: "",
        addressLine3: "",
        addressLine4: "",
        addressLine5: "",
        addressLine6: "",
        addressLine7: "",
        addressLine8: "",
        addressLine9: "",
        addressLine10: "",
        hausCode: "",
        municipalityCode: "",
        eggCode: "",
        lacsIndicator: "",
        codes: {}
    },
    email: {
        full_email_address: "",
        addressee: "",
        domain: "",
        top_level: "",
        codes: {}
    },
    identity: {
        nationality: "",
        dob: "",
        nationalid: "",
        contact_type: "",
        organization_name: "",
        gender: "",
        surname_first: "",
        givenfullname: "",
        completename: "",
        surname_prefix_first: "",
        surname_prefix_second: "",
        givennameinitials: "",
        indicator: "",
        formofaddress: "",
        qualificationpreceding: "",
        qualification_int_first: "",
        qualification_int_second: "",
        qualification_suceeding: "",
        name_qualified: "",
        function: "",
        codes: {}
    },
    phone: {
        phone_number: "",
        calling_from: "",
        phone_countryCode: "",
        formatted_international: "",
        line_type: "",
        international_prefix: "",
        calling_code: "",
        trunk: "",
        area_code: "",
        number: "",
        codes: {}
    },
    credentials: {
        username: "",
        password: "",
        tenant: ""
    },
    options: {

    }
};

var submitLogin = "submitLogin";
var appControllers = angular.module('appControllers', []);


appControllers.controller('BasicViewCtrl', ['$scope', '$http', '$location', '_', 'User', 'configService', function( $scope, $http, $location, _, User, configService) {
    $scope.user = User,
    $scope.tabs_global = tabs_global,
    $scope.tabs = tabs,
    $scope.input = angular.copy(empty_input),
    $scope.optionsActive = false,
    $scope.shared = {loading: false};


    configService.async().then(function(d) {
        $scope.input = merge(d['input'], angular.copy(empty_input));
        $scope.input_default = d['input'];
        $scope.json_endpoint = d['json_endpoint'];
        //$scope.crntenant = d['crntenant'];
        $scope.crntenant = d['crntenant'];
        $scope.presets = d['presets'];
        $scope.options = d['options']['full'];

    })


    $scope.go = function ( path ) {
        var c = confirm("Warning: Changing input types will clear data currently entered.\nClick OK to continue or Cancel to stay on this page.");
        if (c) {
            $location.path( path );
        } else {

        }
    };

    $scope.credentialsVerified = {verified: false};
    // If the credentials aren't defined in the credentials object
    // Then we initialize them as blank
    if ($scope.user.credentials != undefined) {
        $scope.credentials = $scope.user.credentials;
        $scope.credentialsVerified.verified = $scope.user.credentialsVerified;
    } else {
        $scope.credentials = {
            username: '',
            password: '',
            tenant: ''
        };
    }
    $scope.simplified = false;
    $scope.reliability = {
        'address': 0,
        'identity': 0,
        'email': 0,
        'phone': 0
    },
    $scope.reliabilityMap = {
        10: 'Good',
        20: 'Questionable',
        30: 'Bad'
    },
    $scope.token = {},
    $scope.myData = [],
    $scope.country_codes = country_codes,
    $scope.response = false,
    $scope.summaryActive = {active:false},
    $scope.old_input = {},
    $scope.custom_options_text = "",
    $scope.summaryDisabled = true,
    $scope.summaryTooltip = "You must submit before viewing a summary",
    $scope.status = {};
    $scope.selection = [],
    //$scope.credentials = credentialsService.getCredentials(),
    $scope.updated = {}, $scope.updated.address = true,
    $scope.reliabilityToType = function (r) {
        switch (r) {
            case 10: return 'success';
            case 20: return 'warning';
            case 30: return 'danger';
            default: return '';
        }
    },
    $scope.submitForm = function(){
        if (!$scope.credentialsVerified.verified) {
            alert("You must enter credentials before submitting.")
            return false;
        }
        console.log($scope.crntenant);
        if ($scope.input['identity']['referenceno'] == null && $.inArray($scope.credentials['tenant'], $scope.crntenant) > -1) {
                alert("You must enter a Reference Number for your company before submitting.")
        return false;
        }

        $scope.shared.loading = true;
        $scope.optionsActive = false;
        $scope.removeNulls($scope.input);
        $scope.input = merge($scope.input,empty_input);
        $scope.input['credentials']['username'] = $scope.credentials['username'];
        $scope.input['credentials']['password'] = $scope.credentials['password'];
        $scope.input['credentials']['tenant'] = $scope.credentials['tenant'];
        $scope.input['options'] = $scope.selection.join(';');
        if ($scope.custom_options.enabled) {
            $scope.input['options'] = $scope.input['options'] + ";" + $scope.custom_options.text;
        }

        console.log($scope.input['options']);
        console.log("$scope.token['token'] + " + $scope.token['token']);
        //$http.post('http://localhost:8080/validate', {input: $scope.input, token: $scope.token['token']}).
        $http.post($scope.json_endpoint+'/json/validate', {input: $scope.input, token: $scope.token['token']}).    
            success(function(data, status, headers, config) {
                $scope.response = true;
                angular.copy($scope.input, $scope.old_input);
                $scope.input = data['Envelope']['Body']['validateResponse']['return'];
                console.log($scope.input);
                $scope.tabs[0].active = false;
                $scope.summaryActive = {active:true};
                $scope.summaryDisabled = false;
                $scope.shared.loading = false;
                $scope.summaryTooltip = "";
                $scope.reliability = {
                    'address': $scope.input['address']['codes']['reliability'] === '?' ? 0 : $scope.input['address']['codes']['reliability'],
                    'identity': $scope.input['identity']['codes']['reliability'] === '?' ? 0 : $scope.input['identity']['codes']['reliability'],
                    'email': $scope.input['email']['codes']['reliability'] === '?' ? 0 : $scope.input['email']['codes']['reliability'],
                    'phone': $scope.input['phone']['codes']['reliability'] === '?' ? 0 : $scope.input['phone']['codes']['reliability']
                };
                if($scope.input['address']['codes']['reliability'] === '?'){
                    delete $scope.input['address']['codes']['messages'];
                }
                if($scope.input['identity']['codes']['reliability'] === '?'){
                    delete $scope.input['identity']['codes']['messages'];
                }
                if($scope.input['phone']['codes']['reliability'] === '?'){
                    delete $scope.input['phone']['codes']['messages'];
                }
                if($scope.input['email']['codes']['reliability'] === '?'){
                    delete $scope.input['email']['codes']['messages'];
                }
                $scope.myData = [
                    {label:'Contact', value: parseInt($scope.reliability['identity']), type: $scope.reliabilityToType(parseInt($scope.reliability['identity']))},
                    {label:'Address', value: parseInt($scope.reliability['address']), type: $scope.reliabilityToType(parseInt($scope.reliability['address']))},
                    {label:'Email', value: parseInt($scope.reliability['email']), type: $scope.reliabilityToType(parseInt($scope.reliability['email']))},
                    {label:'Phone', value: parseInt($scope.reliability['phone']), type: $scope.reliabilityToType(parseInt($scope.reliability['phone']))}
                ];

                $scope.updated.address = true;




                $scope.detail_list = [];
                $scope.parseDetailList = function (list) {
                    if (list.substring(0,5) == 'ITEM='){
                        list = list.substr(5);
                    }
                    return list.split("|").map(function(v){return v.split("=")});
                }
                console.log($scope.input);
                if ($scope.input['address']['codes']['detail_list'] !== null || $scope.input['email']['codes']['detail_list'] !== null || $scope.input['phone']['codes']['detail_list'] !== null || $scope.input['identity']['codes']['detail_list'] !== null ) {
                    $scope.extended_details = true;
                    if($scope.input['address']['codes']['detail_list'] != null){
                        $scope.detail_list['address'] = $scope.parseDetailList($scope.input['address']['codes']['detail_list']);
                    }
                    if($scope.input['email']['codes']['detail_list'] != null){
                        $scope.detail_list['email'] = $scope.parseDetailList($scope.input['email']['codes']['detail_list']);
                    }
                    if($scope.input['phone']['codes']['detail_list'] != null){
                        $scope.detail_list['phone'] = $scope.parseDetailList($scope.input['phone']['codes']['detail_list']);
                    }
                    if($scope.input['phone']['codes']['detail_list'] != null){
                        $scope.detail_list['identity'] = $scope.parseDetailList($scope.input['identity']['codes']['detail_list']);
                    }


                } else {
                    $scope.extended_details = false;
                }

            }).
            error(function(data, status, headers, config) {
                console.log('Error loading');
                $scope.shared.loading = false;
            });
    },
    $scope.setPreset = function(preset){
        $scope.clearForm();
        $scope.input = merge($scope.presets[preset]['preset'],empty_input);
        console.log($scope.presets[preset]['options']);
        for(var option in $scope.presets[preset]['options']){
            $scope.toggleSelection($scope.presets[preset]['options'][option]);
        }
    },

    $scope.items = {
        email: '',
        phone: '',
        name: '',
        company: ''
    },
    $scope.clearForm = function(){
        $scope.input = angular.copy(empty_input);
        $scope.input = merge($scope.input_default, $scope.input);
        $scope.response = false;
        $scope.selection = [];
        $scope.response = false;
        $scope.summaryActive = {active:false};
        $scope.tabs[0].active = true;
        $scope.old_input = {};
        $scope.summaryDisabled = true;
        $scope.summaryTooltip = "You must submit before viewing a summary";
        $scope.items = {
            email: '',
            phone: '',
            name: '',
            company: ''
        };
    },

    $scope.undoForm = function(){
        var old = angular.copy($scope.old_input);

        $scope.clearForm();
        $scope.input = old;
        $scope.selection = $scope.old_options;
    },

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    },
    $scope.toggleSelection = function toggleSelection(option) {
        var idx = $scope.selection.indexOf(option);
        // is currently selected
        if (idx > -1) {
            $scope.selection.splice(idx, 1);
        }
        // is newly selected
        else {
            $scope.selection.push(option);
        }
        $scope.input['options'] = $scope.selection.join(';');
    };
    $scope.removeNulls = function removeNulls(obj){
        //var isArray = obj instanceof Array;
        for (var k in obj){
            if (obj[k]===null) obj[k] = "";
            if (typeof obj[k]=="object") removeNulls(obj[k]);
        }
    };
    $scope.custom_options = {};
    $scope.custom_options.enabled = false;
    $scope.custom_options.text = "";
}]);


appControllers.controller('ReducedViewCtrl', ['$scope', '$http', '$controller', '_', 'User', 'configService', function( $scope, $http, $controller, _, User, configService) {
    $controller('BasicViewCtrl', {$scope: $scope});

    $scope.input = angular.copy(empty_input);
    //$scope.custom_options_text = "";


    configService.async().then(function(d) {
        $scope.input = merge(d['input'], angular.copy(empty_input));
        $scope.options = [{name: 'Options', options: d['options']['simplified'] }];
    })

    $scope.simplified = true;

    
//chf added referenceno input field

            $scope.tabs = [
        {
            id: "identity",
            name: "Contact",
            icon: "glyphicon glyphicon-user",
            active: true,
            panes: [
                { name: "Identity/Contact",
                    fields1: [
                        { id: "referenceno", name: "Reference Number"},
                        { id: "completename", name: "Complete name"},
                        { id: "dob", name: "Date of birth (MM/DD/YYYY)"},
                        { id: "nationalid", name: "National ID"}]
                },
                { name: "Name",
                    fields1: [
                        //{ id: "surname_first", name: "Surname first"},
                        //{ id: "surname_prefix_second", name: "Surname second"},
                        //{ id: "givenfullname", name: "Given names full"}
                    ],
                    fields2: [
                        //{ id: "givennameinitials", name: "Given names initials"}
                    ]
                },
                { name: "Name qualifiers",
                    fields1: [
                        //{ id: "formofaddress", name: "Form of address"}
                    ],
                    fields2: [
                        //{ id: "function", name: "Function"}
                    ]
                }
            ]
        },
        {
            id: "address",
            name: "Address",
            icon: "glyphicon glyphicon-globe",
            panes: [
                { name: "Delivery",
                    fields1: [//{ id:"inputEmail3", name: "Key"},
                        //{ id:"thoroughfare", name: "Street name"},
                        //{ id:"houseNumber", name: "House number"},
                        //{ id:"houseNumberAddition", name: "House number addition"},
                        { id:"addressLine1", name: "Address line 1"},
                        { id:"addressLine2", name: "Address line 2"},
                        { id:"locality", name: "Locality/City"},
                        { id:"province", name: "Administrative area/Province"},
                        { id:"postalCode", name: "Postal code"},
                        { id:"countryCode", name: "Country", type: "select"}
                        //{ id:"postTown", name: "Post town"},
                        //{ id:"inputEmail3", name: "Delivery Service Indicator"},
                        //{ id:"name", name: "Name"},
                        //{ id:"organization", name: "Organization"},
                        //{ id:"department", name: "Department"}
                    ],
                    fields2: [ //{ id:"inputEmail3", name: "Dependent street name"},
                        //{ id:"subDistrict", name: "Subadministrative area"},
                        //{ id:"district", name: "Dependent locality"},
                        //{ id:"postBox", name: "Postbox"},
                        //{ id:"premise", name: "Premise"},
                        //{ id:"inputEmail3", name: "Subpremise"},
                        //{ id:"countryName", name: "Country name"},
                        ]
                },
                { name: "Address lines",
                    fields1: [

                        //,{ id:"addressLine3", name: "Address line 3"}
                    ],
                    fields2: [
                        //{ id:"addressLine4", name: "Address line 4"},
                        //{ id:"addressLine5", name: "Address line 5"}
                    ]
                },
                { name: "Additional information",
                    fields1: [
                       // { id:"latitude", name: "Geocoding - Latitude"},
                       // { id:"longitude", name: "Geocoding - Longitude"}
                    ],
                    fields2: [
                        //{ id:"address_options", name: "Options"},
                        //{ id:"inputEmail3", name: "Pre/Post Directional Indicator"}
                    ]
                }
            ]},
        {
            id: "email",
            name: "Email",
            icon: "glyphicon glyphicon-envelope",
            panes: [
                { name: "Email",
                    fields1: [
                        { id:"full_email_address", name: "Email address"}
                    ],
                    fields2: [
                    ]
                }
            ]},
        {
            id: "phone",
            name: "Phone",
            icon: "glyphicon glyphicon-earphone",
            panes: [
                { name: "Phone",
                    fields1: [
                        { id:"phone_number", name: "Phone number"},
                        { id:"calling_from", name: "Calling from country", type:"select"}
                    ],
                    fields2: [
                    ]
                }
            ]}
    ];
     


}]);

appControllers.controller('EmbedViewCtrl', ['$scope', '$location', '$http', '$controller', '_', 'User', 'configService', function( $scope, $location, $http, $controller, _, User, configService) {


    $controller('BasicViewCtrl', {$scope: $scope});
    $controller('NavCtrl', {$scope: $scope});

    $scope.data_source = "";

    configService.async().then(function(d) {
        $scope.input = merge(d['input'], empty_input);
        $scope.options = [{name: 'Options', options: d['options']['simplified'] }];
    })

    function receiveMessage(event)
    {
        // Do we trust the sender of this message?
        //if (event.origin !== "http://example.com:8080")
        //    return;

        // event.source is window.opener
        // event.data is "hello there!"

        // Assuming you've verified the origin of the received message (which
        // you must do in any case), a convenient idiom for replying to a
        // message is to call postMessage on event.source and provide
        // event.origin as the targetOrigin.
        console.log(event);
        var data = event.data;
        $scope.input = merge(event.data.input,empty_input);
        $scope.data_source = event.source;
        //event.source.postMessage("example return data here", event.origin);
        $scope.event_source = event.source;
        $scope.event_origin = event.origin;
        //$scope.credentials['username'] = $scope.input['credentials']['username'] ;
        //$scope.credentials['password'] = $scope.input['credentials']['password'];
        //$scope.credentials['tenant'] = $scope.input['credentials']['tenant'];
        //$scope.submitFormCheckCredentials();
        $scope.credentialsVerified.verified = true;
        $scope.token['token'] = data.configuration.token;
        //console.log("test1");
        console.log($scope.token);
        //console.log("test2");
        if ( data.configuration.submit == true) {
            $scope.submitForm();
        }

    }

    window.addEventListener("message", receiveMessage, false);
    //$scope.input = angular.copy(empty_input);
    //$scope.custom_options_text = "";

    // Load State
    var savedState = $location.search();
    console.log(savedState);

    var allProperties = ['address.addressLine1','address.addressLine2','identity.completename'];

    allProperties.forEach(function (k) {
        if (typeof savedState[k] !== 'undefined') {
            var type = k.split('.')[0];
            var name = k.split('.')[1];
            $scope.input[type][name] = savedState[k];
            console.log(savedState[k]);
            console.log(type);
            console.log($scope.input);
        } else {
            //$scope.model[k] = defaultValues[k];
        }
    });

    // Save the parameters
    $scope.createUrlWithCurrentState = function() {
        allProperties.forEach(function (k) {
            $location.search(k, $scope.input[k]);
        });
    };

    $scope.simplified = true;
    //$scope.custom_options = false;

        $scope.input['address']['countryCode'] = 'MX',
        $scope.input['phone']['calling_from'] = 'MX',
        $scope.tabs = [
            {
                id: "identity",
                name: "Contact",
                icon: "glyphicon glyphicon-user",
                active: true,
                panes: [
                    { name: "Identity/Contact",
                        fields1: [
                            { id: "completename", name: "Complete name"},
                            { id: "dob", name: "Date of birth (MM/DD/YYYY)"},
                            { id: "nationalid", name: "National ID"}]
                    },
                    { name: "Name",
                        fields1: [
                            //{ id: "surname_first", name: "Surname first"},
                            //{ id: "surname_prefix_second", name: "Surname second"},
                            //{ id: "givenfullname", name: "Given names full"}
                        ],
                        fields2: [
                            //{ id: "givennameinitials", name: "Given names initials"}
                        ]
                    },
                    { name: "Name qualifiers",
                        fields1: [
                            //{ id: "formofaddress", name: "Form of address"}
                        ],
                        fields2: [
                            //{ id: "function", name: "Function"}
                        ]
                    }
                ]
            },
            {
                id: "address",
                name: "Address",
                icon: "glyphicon glyphicon-globe",
                panes: [
                    { name: "Delivery",
                        fields1: [//{ id:"inputEmail3", name: "Key"},
                            //{ id:"thoroughfare", name: "Street name"},
                            //{ id:"houseNumber", name: "House number"},
                            //{ id:"houseNumberAddition", name: "House number addition"},
                            { id:"addressLine1", name: "Address line 1"},
                            { id:"addressLine2", name: "Address line 2"},
                            { id:"locality", name: "Locality/City"},
                            { id:"province", name: "Administrative area/Province"},
                            { id:"postalCode", name: "Postal code"},
                            { id:"countryCode", name: "Country", type: "select"}
                            //{ id:"postTown", name: "Post town"},
                            //{ id:"inputEmail3", name: "Delivery Service Indicator"},
                            //{ id:"name", name: "Name"},
                            //{ id:"organization", name: "Organization"},
                            //{ id:"department", name: "Department"}
                        ],
                        fields2: [ //{ id:"inputEmail3", name: "Dependent street name"},
                            //{ id:"subDistrict", name: "Subadministrative area"},
                            //{ id:"district", name: "Dependent locality"},
                            //{ id:"postBox", name: "Postbox"},
                            //{ id:"premise", name: "Premise"},
                            //{ id:"inputEmail3", name: "Subpremise"},
                            //{ id:"countryName", name: "Country name"},
                        ]
                    },
                    { name: "Address lines",
                        fields1: [

                            //,{ id:"addressLine3", name: "Address line 3"}
                        ],
                        fields2: [
                            //{ id:"addressLine4", name: "Address line 4"},
                            //{ id:"addressLine5", name: "Address line 5"}
                        ]
                    },
                    { name: "Additional information",
                        fields1: [
                            // { id:"latitude", name: "Geocoding - Latitude"},
                            // { id:"longitude", name: "Geocoding - Longitude"}
                        ],
                        fields2: [
                            //{ id:"address_options", name: "Options"},
                            //{ id:"inputEmail3", name: "Pre/Post Directional Indicator"}
                        ]
                    }
                ]},
            {
                id: "email",
                name: "Email",
                icon: "glyphicon glyphicon-envelope",
                panes: [
                    { name: "Email",
                        fields1: [
                            { id:"full_email_address", name: "Email address"}
                        ],
                        fields2: [
                        ]
                    }
                ]},
            {
                id: "phone",
                name: "Phone",
                icon: "glyphicon glyphicon-earphone",
                panes: [
                    { name: "Phone",
                        fields1: [
                            { id:"phone_number", name: "Phone number"},
                            { id:"calling_from", name: "Calling from country", type:"select"}
                        ],
                        fields2: [
                        ]
                    }
                ]}
        ];
}]);

appControllers.controller('TabsCtrl', ['$scope', function($scope){
}]);

appControllers.controller('NavCtrl', ['$scope', '$http', '$cookies', 'User', 'configService', function($scope, $http, $cookies, User, configService){
    $scope.user = User;

    if($cookies.username != undefined) {
        console.log('in cookies');
        $scope.credentials['username'] = $cookies.username;
        $scope.credentials['password'] = $cookies.password;
        $scope.credentials['tenant']   = $cookies.tenant;
        $scope.user.credentialsVerified = true;
        $scope.credentialsVerified.verified = true;
    } else {
        // no cookies set
    }
    if($scope.user.credentialsVerified != undefined) {
        $scope.credentialsVerified = {};
        $scope.credentialsVerified.verified = $scope.user.credentialsVerified;
    }

    configService.async().then(function(d) {
        $scope.json_endpoint = d['json_endpoint'];
        //$scope.crntenant = d['crntenant'];
        $scope.crntenant = d['crntenant'];

    })

    $scope.submitFormCheckCredentials = function(){
        $scope.user.credentials = $scope.credentials;
        $scope.shared.loading = true;

        $scope.input = empty_input;
        $scope.input['credentials']['username'] = $scope.credentials['username'];
        $scope.input['credentials']['password'] = $scope.credentials['password'];
        $scope.input['credentials']['tenant'] = $scope.credentials['tenant'];
        
        //$scope.input['options'] = $scope.crntenant['loginoptions'];
        $scope.input['options'] = "PostCredit;DisableDQChecks"
        // console.log("raw loginoptions" + scope.crntenant['loginoptions']);
        // console.log("loginoptions" + $scope.input['options']);

        $http.post($scope.json_endpoint+'/json/validate', {input: empty_input, login: submitLogin}).
            success(function(data, status, headers, config) {
                $scope.response = true;
                $scope.input = data['Envelope']['Body']['validateResponse']['return'];
                $scope.shared.loading = false;
                console.log($scope.input['codes']);
                if($scope.input['codes']['messages'] != undefined && $scope.input['codes']['messages']['value'] === 'Could not validate user.') {
                    alert('Could not validate user, please enter credentials and try again.');
                    $scope.credentialsVerified.verified = false;
                } else {
                    $scope.credentialsVerified.verified = true;
                    $scope.user.credentials = $scope.credentials;
                    $scope.user.credentialsVerified = $scope.credentialsVerified.verified;
                    $cookies.username = $scope.credentials['username'];
                    $cookies.password = $scope.credentials['password'];
                    $cookies.tenant = $scope.credentials['tenant'];
                    //credentialsService.setCredentials($scope.credentials);
                }
            }).
            error(function(data, status, headers, config) {
                console.log('Error loading');
                $scope.shared.loading = false;
            });
    };
    $scope.logout = function () {
        $scope.clearForm();
        $scope.credentials['username']= '';
        $scope.credentials['password'] = '';
        $scope.credentials['tenant'] = '';
        $scope.credentialsVerified.verified = false;
        $scope.user.credentialsVerified = $scope.credentialsVerified.verified;
        $scope.user.credentials = $scope.credentials;
        delete $cookies.username;
        delete $cookies.password;
        delete $cookies.tenant
    };
    $scope.setCredentials = function () {
        $scope.submitFormCheckCredentials();
    };
}]);

appControllers.controller('OptionsCtrl',['$scope', '$controller', function($scope,$controller){
}]);


var EmailModalCtrl =  function($scope, $modalInstance, $http, items){
    $scope.items = items;

    $scope.sendEmail = function () {
        console.log($scope.items);
        $modalInstance.close($scope.items);
        $http.post('/demo/send_summary',
            $.param(
                {
                    summary: $('#actualSummary').html(),
                    email: $scope.items['email'],
                    name: $scope.items['name'],
                    phone: $scope.items['phone'],
                    company: $scope.items['company']
                }), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).
            success(function(data, status, headers, config) {

            }).
            error(function(data, status, headers, config) {

            });

    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};



appControllers.controller('SummaryCtrl',['$scope', '$modal', '$log', '$http', function($scope, $modal, $log, $http){
    $scope.filterText = '1AU';
    $scope.summaryClass = {
        '10': 'r10',
        '20': 'r20',
        '30': 'r30'
    };
    $scope.downloadPDF = function () {
        $log.info('Downloading PDF');
        $http.post('/demo/pdf', $.param({summary: $('#actualSummary').html()}), {responseType:'arraybuffer',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).
            success(function(data, status, headers, config) {
                var file = new Blob([data], {type: 'application/pdf'});
                var fileURL = URL.createObjectURL(file);
                location.href = (window.URL || window.webkitURL).createObjectURL( file )
            }).
            error(function(data, status, headers, config) {

            });
    };
    $scope.open = function (size) {

        var modalInstance = $modal.open({
            templateUrl: 'partials/email.html',
            controller: EmailModalCtrl,
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selectedEmail = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
            $log.info($scope.items['email']);
            $log.info($scope.items['phone']);
        });
    };
    $scope.printDiv = function(divName) {
        var printContents = document.getElementById(divName).innerHTML;
        //var originalContents = document.body.innerHTML;
        var popupWin = window.open('', '_blank', 'width=1024,height=600');
        popupWin.document.open()
        popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="css/app.css" /><link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css"><script type="application/javascript">window.onLoad = function() { setTimeout(function(){window.print();},500) }</script> </head><body><div id="print-link" class="text-center"><h3><a href="#" onclick="window.print(); return false;" >Click here to print</a></h3></div><div class="row"><div class="col-sm-12 summary-jumbotron"><img src="img/logo-big.png"><h1>Results</h1></div></div>' + printContents + '</html>');
        //popupWin.document.close();
    }
}]);

appControllers.controller('EmbedSummaryCtrl',['$scope', '$modal', '$log', '$http', function($scope, $modal, $log, $http){
    $scope.filterText = '1AU';

    //$controller('BasicViewCtrl', {$scope: $scope});

    $scope.summaryClass = {
        '10': 'r10',
        '20': 'r20',
        '30': 'r30'
    };
    $scope.downloadPDF = function () {
        $log.info('Downloading PDF');
        $http.post('/demo/pdf', $.param({summary: $('#actualSummary').html()}), {responseType:'arraybuffer',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).
            success(function(data, status, headers, config) {
                var file = new Blob([data], {type: 'application/pdf'});
                var fileURL = URL.createObjectURL(file);
                location.href = (window.URL || window.webkitURL).createObjectURL( file )
            }).
            error(function(data, status, headers, config) {

            });
    };
    $scope.open = function (size) {

        var modalInstance = $modal.open({
            templateUrl: 'partials/email.html',
            controller: EmailModalCtrl,
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selectedEmail = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
            $log.info($scope.items['email']);
            $log.info($scope.items['phone']);
        });
    };
    $scope.saveToWorldview = function () {
        $scope.data_source.postMessage($scope.input, $scope.event_origin);
        window.close();
    };
    $scope.discard = function () {
        window.close();
    };
    $scope.printDiv = function(divName) {
        var printContents = document.getElementById(divName).innerHTML;
        //var originalContents = document.body.innerHTML;
        var popupWin = window.open('', '_blank', 'width=1024,height=600');
        popupWin.document.open()
        popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="css/app.css" /><link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css"><script type="application/javascript">window.onLoad = function() { setTimeout(function(){window.print();},500) }</script> </head><body><div id="print-link" class="text-center"><h3><a href="#" onclick="window.print(); return false;" >Click here to print</a></h3></div><div class="row"><div class="col-sm-12 summary-jumbotron"><img src="img/logo-big.png"><h1>Results</h1></div></div>' + printContents + '</html>');
        //popupWin.document.close();
    }
}]);


appControllers.controller('EmailModalCtrl',['$scope', '$modalInstance', '$http', 'items', EmailModalCtrl]);

appControllers.controller('StatusCtrl',['$scope', function($scope){
    $scope.hideTree = function(event) {
        $(event.target).parent().children('ul.tree').toggle(300);
    };
    $scope.expandAll = function(event) {
        $('.well li').children('ul.tree').toggle(true);
    };
    $scope.closeAll = function(event) {
        $('.well li').children('ul.tree').toggle(false);
    };
}]);

appControllers.controller('JSONCtrl',['$scope', function($scope){

}]);