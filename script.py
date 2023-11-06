import urllib.request

fp = urllib.request.urlopen("https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent&CIK=&type=&company=&dateb=&owner=include&start=0&count=40&output=atom")
mybytes = fp.read()

mystr = mybytes.decode("utf8")
fp.close()

print(mystr)