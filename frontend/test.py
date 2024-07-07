def get_sorted_keys_values(dict_obj):
    # write your code here
    sorted_dict_object = {k: dict_obj[k] for k in sorted(list(dict_obj.keys()))}
    keys = list(sorted_dict_object.keys())

    print("keys", keys)

    val = list(sorted_dict_object.values())
    print("val", val)
    return [keys, val]



# take user input
dictionary = {"orange": "fruit", "carrot": "vegetable", "dog": "animal"}


# call the function
print(get_sorted_keys_values(dictionary))
