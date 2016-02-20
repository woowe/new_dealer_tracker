export function implementsInterface(scheme: any, obj: any) {
    var keys = Object.keys(scheme);

    for (var i = 0; i < keys.length; ++i) {
        if (obj[keys[i]]) {
            if (typeof obj[keys[i]] == scheme[keys[i]]) {
                return true;
            } else {
                throw ("Variable: ", obj, " feild: ", keys[i], " isn't the type ", scheme[keys[i]]);
            }
        } else {
            throw ("Variable: ", obj, " doesn't contain feild ", keys[i]);
        }
    }

    throw ("Scheme isn't defined");
}
