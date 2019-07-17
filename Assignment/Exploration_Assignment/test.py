import re
domain = "roopak"

a = re.findall(domain + r'(\d{5})', "roopak12345")
print(a)
'''
print(a)

def max_logs(domain, logs):
    log_dates = {}
    for eachline in logs:
        if domain in eachline:
            domain_start = eachline.find(domain)
            log_start = domain_start + len(domain)
            log = eachline[log_start:log_start+8]
            if log in log_dates:
                log_dates[log] += 1
            else:
                log_dates[log] = 1

    maxi = 0
    key = ""
    for k, v in log_dates.items():
        if v >= maxi:
            maxi = v
            key = k
    return key

domain = "organisation1.com"
logs = ["user2@" + domain + "20190100dfsd",
        "user2@" + domain + "201901012fds",
        "user2@" + domain + "20190100sdrys",
        "user2@" + domain + "20190100vght",
        "user2@" + "organisation2.com" + "20190103vds",
        "user2@" + "organisation2.com" + "2019010"]
print(max_logs(domain, logs))
int("")
'''
